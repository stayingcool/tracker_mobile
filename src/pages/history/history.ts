import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MeetingService } from '../../services/meeting';
import { Meeting } from '../../model/meeting';
import { UtilityService } from '../../services/utilities';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  userID: string;
  meetings: Meeting[];
  excel_data: Meeting[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _storage: Storage, private _utilityService: UtilityService,
    private _meetingService: MeetingService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  ionViewDidEnter() {
    this._storage.get('userID').then((val) => {
      this.userID = val;
      console.log('Fetched user id: Your userid is:', val);
      if (!val)
        this._utilityService.showToastWithButton('Please go to settings to set your information.', 'middle');
    });

    this._storage.get('session').then(res => {
      this.meetings = res;
    });
  }

  async sendEmail(meeting_id: string) {
    let body = { "id": meeting_id }
    this._meetingService.get(body).then(res => {
      this.excel_data = JSON.parse(res.data);

      if (this.excel_data.length == 0)
        this._utilityService.showToastWithButton('There are no participants!', 'middle');
      else {
        this._utilityService.writeExcel(this.excel_data).then(excelFilePath => {
          let emailContent = {
            to: this.userID,
            attachments: [excelFilePath + '/Participants.xlsx'],
            subject: 'Your Meeting Participants',
            body: 'Attached Excel file contains all the participants',
            isHtml: true
          };
          this._utilityService.emailWithAttachment(emailContent);
        })
      }
    })
      .catch(error => {
        console.log("Error encountered :-(");
        console.log(error.status);
        console.log(error.error); // error message as string
        this._utilityService.showToastWithButton('Failed! : ' + error.error, 'middle');
      });
  };

}

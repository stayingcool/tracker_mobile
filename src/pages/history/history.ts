import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as XLSX from 'xlsx';
import { File } from '@ionic-native/file';
import { EmailComposer } from '@ionic-native/email-composer';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { MeetingService } from '../../services/meeting';
import { Meeting } from '../../model/meeting';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  userID: string;
  meetings: Meeting[];
  excel_data: any[] =
  [
    {
        "id": "ss222/@Loc-ss@2018-08-28@14:26 a70b9df2-0a2d-497c-9c86-ef9a5d5a5873",
        "name": "Nisar Ahmef",
        "userid": "ahmni01@ca.com"
    },
    {
        "id": "ss222/@Loc-ss@2018-08-28@14:26 a70b9df2-0a2d-497c-9c86-ef9a5d5a5873",
        "name": "Gg",
        "userid": "Gfd"
    }
]

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    private emailComposer: EmailComposer, private _storage: Storage, public file: File, private _meetingService: MeetingService) {
      this.emailComposer.isAvailable().then((available: boolean) => {
        if (available) {
          console.log("emailComposer is available....");
        }
      });

      this._storage.get('userID').then((val) => {
        this.userID = val;
        console.log('Fetched user id: Your userid is:', val);
      });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  ionViewDidEnter() {
    this._storage.get('userID').then((val) => {
      this.userID = val;
      console.log('Fetched user id: Your userid is:', val);
      if(!val)
        this.showToastWithButton('Please go to settings to set your information.', 'middle');
    });

    this._storage.get('session').then(res => {
      this.meetings = res;
    });
  }

  write(): XLSX.WorkBook {
    /* generate worksheet */
    //this.meeting.id

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.excel_data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Attended');

    return wb;
  };

  async email(meeting_id:string) {
    let body = {"id": meeting_id}
    this._meetingService.get(body).then(res =>{
      console.log('Fetched Meeting Info: ');
      this.excel_data = res.data;
      console.log(JSON.stringify(res));
    })
    .catch(error => {
      console.log("Error encountered :-(");
      console.log(error.status);
      console.log(error.error); // error message as string
      this.showToastWithButton('Failed! : ' + error.error, 'middle');
    });

    const wb: XLSX.WorkBook = this.write();
    const filename: string = "Participants.xlsx";
    try {
      /* generate Blob */
      const wbout: ArrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blob: Blob = new Blob([wbout], {type: 'application/octet-stream'});

      /* find appropriate path for mobile */
      const target: string = this.file.documentsDirectory || this.file.externalDataDirectory || this.file.dataDirectory || '';
      const dentry = await this.file.resolveDirectoryUrl(target);
      const url: string = dentry.nativeURL || '';

      /* attempt to save blob to file */
      await this.file.writeFile(url, filename, blob, {replace: true});

      let email = {
        to: this.userID,
        attachments: [url + '/Participants.xlsx'],
        subject: 'Your Meeting Participants',
        body: 'Attached Excel file contains all the participants',
        isHtml: true
      };
      this.emailComposer.open(email);

    } catch(e) {
      if(e.message.match(/It was determined/)) {
        /* in the browser, use writeFile */
        XLSX.writeFile(wb, filename);
      }
      else alert(`Error: ${e.message}`);
    }
  };

  showToastWithButton(message: string, position): void {
    const toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: position
    });
    toast.present();
  }

}

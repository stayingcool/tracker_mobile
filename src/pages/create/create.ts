import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { MeetingService } from '../../services/meeting';
import { Meeting } from '../../model/meeting';
import { DomSanitizer } from '@angular/platform-browser';
import { EmailComposer } from '@ionic-native/email-composer';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  private meetingDetailsFG: FormGroup;
  name: String;
  userID: string;
  location: String;
  date: String;
  time: String;
  meeting: Meeting;
  user_img: any;
  attachment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public meetingService: MeetingService,
    private formBuilder: FormBuilder, private base64ToGallery: Base64ToGallery, private sanitizer: DomSanitizer,
    private emailComposer: EmailComposer, public toastCtrl: ToastController, private _storage: Storage
  ) {
    this._storage.get('userID').then((val) => {
      this.userID = val;
      console.log('Fetched user id: Your userid is:', val);
    });

    this.meetingDetailsFG = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    })

    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        console.log("emailComposer is available....");
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  createMeeting(): void {
    console.log(this.meetingDetailsFG.value);
    this.meetingService.create(this.meetingDetailsFG.value).then(res => {
      this.meeting = JSON.parse(res.data);
      console.log('this.meeting.img: ');
      console.log(this.meeting.img);
      this.attachment = 'base64:qrcode.png//' + this.meeting.img;
      this.user_img = "data:Image/*;base64," + this.meeting.img;
    })
      .catch(error => {
        console.log("Error encountered :-(");
        console.log(error.status);
        console.log(error.error); // error message as string
        this.showToastWithButton('Failed! : ' + error.error, 'middle');
      });
  }

  sendEmail(): void {
    let email = {
      to: this.userID,
      attachments: [this.attachment],
      subject: this.meetingDetailsFG.value.name,
      body: 'Name: ' + this.meetingDetailsFG.value.name + '<br>' +
        'Location: ' + this.meetingDetailsFG.value.location + '<br>' +
        'Date: ' + this.meetingDetailsFG.value.date + '<br>' +
        'Time: ' + this.meetingDetailsFG.value.time,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

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

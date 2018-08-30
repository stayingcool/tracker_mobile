import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { MeetingService } from '../../services/meeting';
import { Meeting } from '../../model/meeting';
import { DomSanitizer } from '@angular/platform-browser';
import { EmailComposer } from '@ionic-native/email-composer';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  private meetingDetailsFG: FormGroup;
  name: String;
  location: String;
  date: String;
  time: String;
  meeting: Meeting;
  user_img:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public meetingService: MeetingService,
    private formBuilder: FormBuilder, private base64ToGallery: Base64ToGallery, private sanitizer: DomSanitizer,
    private emailComposer: EmailComposer, public toastCtrl: ToastController
  ) {

    this.meetingDetailsFG = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    })

    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
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
      this.user_img = "data:Image/*;base64,"+ this.meeting.img;
    })
    .catch(error => {
      console.log("Error encountered :-(");
      console.log(error.status);
      console.log(error.error); // error message as string
      this.showToastWithButton('Failed! : ' + error.error, 'middle');
    });
  }

  sendEmail():void{
    let email = {
      to: 'ahmni01@ca.com',
      attachments: [
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUgAAAbYAAAG2AQAAAAA7cp7dAAAFRUlEQVR4nO2bYW7kOgyDBfgAOVKu7iPlAAb0YpJy3DajFvv3KSgGTeovCyRemqI85v90DCuuuOKKK85tHqcd95m1y/yav9+XxoExOG332KP7NYe24lKuxR9xj/P+ce/j/rx4mzl24MbtOjm+uIybf78v95u4H3a7jPR95R5yf+KF3NfPOczO4v7CzWmrZzyJ+R4IzYF9viVO+eL+xmn+HpzaFpLQNaOnTvjbeyjuBwedwNnU1AnhbYQAn2um+4u+FPed4zpGGfjt5+f6V9x3jgd9gZ79VN8506kW+OxY33QUl3FcxygSUwx0kcva/CsWMaCG0+IyjsIgezW9gBY0xy80CNvK5sXl3FqyMJ2Nz959jcWMvvQvsDgoLuFoo8Y0+0Zi8PTotLE0BZjmu04U9845FijegM50SDM6/CydrLte1FlczlEnHA/bJRI93OssAqjHw2TKWnE5x5oJScmazhj1zHeuY7yrF/cL1wk5F/8ZAOCQKpA+Icm+6W5x7xx1gk6fWRR+OZ2VFm4W2VXf64DiPnIORzCffWd9T91dYRXVdxz0X8VlHOYwwiezLWzuDE0b5QF+Yb2T4hKuXUzyFOlxoOQWqxaEpLNOZRxYXMJhIhvKfc5lZ8VP6ZV44FVQJ4rLOUDw+yrxjUsW1zFWWuPQrB9b36m4V25EB4+fjck0XT+0Yag8VZXgxaVclErSVAgDjP9ctWRgB7SZOtGKSzlq6lAV5fGwIcMXa31Oaudy58WlXFP2PJ+xQmgtZSr3kaz0CAK9FZdy8Fk0sKZnz2APhstREzSFAba9h+LeObyHHtkJCSZVnbdE9hyJ1Lf3V9wPzsNJPSbrUPHK7ig8LMeoi1Jcwtmz02HJrSITznHk0N0i5ysu57BAKbxfA9vFKY25jLx/RIhSXM7hPbi6TNFfWhkVkz93NUzsqVOL+8Qp5Gsx0NcpVy01nToTguJyjv/7Dc60qT//WIOmPp4mdXtyqeLeObaYVp3qjKakE6zyJRg/dKK4F45LfYO9Ukxy9NADa49aqKItLueouOzgtWjam4rUSXMzFHP96J8U95EbJnfAgkA2gXVVbGoOjmFVcRlHVWA+ysYy6/4WOyMGt43D3u79gOI+cO6xj6zFxgc1oGRpuyuu9r3uL+4DB8fqHgnKqk0NYzu15Klci0u5iJ1cEgsiKv556rH3JFLA4jJuRB0gX8A2KY2/c4k7Q0X6lqMU984Z8uY10J/ZzdVMabSSgC/1bXEvHB9208aHc8R2UVcJZTqNhl4rLuXUsY8uU1ROJ+sqXuFdxxedKO6doxKw4QnHeq7X8rhX3aBvvqC4d8637ISVKNVikxBN7ai9ivuF4zLV2AmJlY25lLt69bwNTURxKWermezaMaoioEVK3eBqm3/1Z8W9cQpO0GjCTjHGfhyFK0/TCe2p4lIOL8Hhqljfc/nqDPidlhY9Z3afiss5tkEsouih736FvcKUt/hWvT3f8y7uneP//idHkd9Xrc8mnjr58AXF5Zzj8Su55yl3jMbWp2VpWRl4cSmnGE97xLrHblxuJNl1wuKrDMUlHO3qikuxoHW0SlbO1+lqKcleXMrxgDawfuqR8xlmtHE6G1p8uz8r7pXThOVTN+amqrHGsl2c9TBfXlzKUQw8DEKUpCwIVAHwBnSyrbicuyJ71l48449FQ09VgpTj9OL+wjHkk5miGM+BvNNyB1suVVzOMXaSBocenIwAacR87SwrLuGoE5IKudfG9gi/S7fd7EufpLg3bq1j41DG79Ja54On6K7Frbic+4ejuOKKK+5/z/0HrFwQu2Mwk+UAAAAASUVORK5CYII='
      ],
      subject: 'Your Email',
      body: 'Testing the email functionality of Ionic',
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  showToastWithButton(message:string, position):void{
    const toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: position
    });
    toast.present();
  }
}

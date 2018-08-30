import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Attendance } from '../../model/attendance';
import { AttendanceService } from '../../services/attendance';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  QRCode = null;
  isAndroid: boolean = false;
  showSettings: boolean = false;
  name: String;
  userID: String;
  private userDetailsFG: FormGroup;
  attendance: Attendance;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner,
    private formBuilder: FormBuilder, platform: Platform, public toastCtrl: ToastController,
    private storage: Storage, private _attendanceService: AttendanceService) {
    this.isAndroid = platform.is('android');

    this.userDetailsFG = this.formBuilder.group({
      name: ['', Validators.required],
      userID: ['', Validators.required]
    });

    this.storage.get('name').then((val) => {
      this.name = val;
      console.log('From Storage: Your name is: ', val);
    });

    this.storage.get('userID').then((val) => {
      this.userID = val;
      console.log('From Storage: Your userid is:', val);
    });
  }

  scanQRCode(): void {
    if (!this.name && !this.userID) {
      this.showToast('Please set the user details...', 5000);
      this.toggleShowSettings();
      return;
    }
    this.barcodeScanner.scan().then(barcodeData => {
      this.QRCode = barcodeData.text;
      if (this.QRCode){
        this.showToast('QR Code Scanned successfully', 2000);
        let body = {
          id: this.QRCode,
          name: this.name,
          userid: this.userID
        }
        //CallAttenanceService
        this._attendanceService.create(body).then(res =>{
          //Handle the success
        })
        .catch(error => {
          console.log("Error encountered :-(");
          console.log(error.status);
          console.log(error.error); // error message as string
          this.showToastWithButton('Failed! : ' + error.error, 'middle');
        });

      }

      console.log('Scanned Barcode is :', this.QRCode);
    }).catch(err => {
      console.log('Error', err);
      this.showToast('Failed to scan QR Code, Please try again!', 5000);
    });
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

  toggleShowSettings(): void {
    this.showSettings = (this.showSettings == false) ? true : false;
  }

  saveUser(): void {
    console.log(this.userDetailsFG.value);
    this.showSettings = false;
    this.showToast('Details saved successfully', 3000);

    const userObject = this.userDetailsFG.value;
    if (userObject.name && userObject.userID) {
      this.storage.set('name', userObject.name);
      this.storage.set('userID', userObject.userID);
      console.log('Stored: userObject.name : ' + userObject.name);
      console.log('Stored: userObject.userID: ' + userObject.userID);
    }
  }

  showToast(message: string, timeInMilliseconds: number): void {
    const toast = this.toastCtrl.create({
      message: message,
      duration: timeInMilliseconds
    });
    toast.present();
  }


}

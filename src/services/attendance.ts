import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class AttendanceService {
  private _attendanceURL: string = 'http://ahmni01-i9904.ca.com:31112/function/recordattendance';
  private header = { "Content-Type": "application/json" };

  constructor(private http: HTTP) {
    this.http.setDataSerializer('json');
  }

  create(body: any): Promise<any> {
    return this.http.post(this._attendanceURL, body, this.header);
  }
}

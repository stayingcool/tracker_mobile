import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class MeetingService {
  private _meetingURL: string = 'http://ahmni01-i9904.ca.com:31112/function/createmeeting';
  private header = { "Content-Type": "application/json" };

  constructor(private http: HTTP) {
    this.http.setDataSerializer('json');
  }

  create(body: any): Promise<any> {
    return this.http.post(this._meetingURL, body, this.header);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error Occurred : ', error);
    return Promise.reject(error.message || error);
  }
}

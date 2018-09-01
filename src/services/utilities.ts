import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { File } from '@ionic-native/file';
import { EmailComposer } from '@ionic-native/email-composer';
import { ToastController } from 'ionic-angular';

@Injectable()
export class UtilityService {
  constructor(public file: File, private _emailComposer: EmailComposer,
    public toastCtrl: ToastController) {
    this._emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        console.log("emailComposer is available....");
      }
    });
  }

  write(excel_data: any): XLSX.WorkBook {
    /* generate worksheet */

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(excel_data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Attended');

    return wb;
  };

  async writeExcel(excel_data: any): Promise<String> {
    const wb: XLSX.WorkBook = this.write(excel_data);
    const filename: string = "Participants.xlsx";
    try {
      /* generate Blob */
      const wbout: ArrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blob: Blob = new Blob([wbout], { type: 'application/octet-stream' });

      /* find appropriate path for mobile */
      const target: string = this.file.documentsDirectory || this.file.externalDataDirectory || this.file.dataDirectory || '';
      const dentry = await this.file.resolveDirectoryUrl(target);
      const url: string = dentry.nativeURL || '';

      /* attempt to save blob to file */
      await this.file.writeFile(url, filename, blob, { replace: true });

      return url;

    } catch (e) {
      if (e.message.match(/It was determined/)) {
        /* in the browser, use writeFile */
        XLSX.writeFile(wb, filename);
      }
      else alert(`Error: ${e.message}`);
    }
  }

  emailWithAttachment(emailContent: any) {
    this._emailComposer.open(emailContent);
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

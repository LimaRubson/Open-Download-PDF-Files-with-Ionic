import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  platform: any;
  constructor(public navCtrl: NavController, private document: DocumentViewer, private file: File, private transfer: FileTransfer) {

  }

  openLocalPdf() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    };

    this.document.viewDocument('assets/PDF/pedfComprovantePagamentoContasGVT.pdf', 'application/pdf', {})
  }

  downloadAndOpenPdf() {

    let path = null;

    if(this.platform.is('ios')) {
        path = this.file.documentsDirectory;
    }else {
      path = this.file.dataDirectory;
    }

    const transfer = this.transfer.create();
    transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf', path + 'myfile.pdf').then(entry => { 

      let url = entry.toURL();
      this.document.viewDocument(url, 'application', {});
    
    });
      
  }

}

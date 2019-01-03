import { Component, OnInit } from '@angular/core';
import { FileUploadModule, FileUpload } from 'primeng/components/fileupload/fileupload';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  uploadedFiles: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  onUpload(event) {
    // for (let file of event.files) {
    //   this.uploadedFiles.push(file);
    // }

    // this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

}

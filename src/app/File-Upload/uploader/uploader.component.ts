import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderService } from '../uploader.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-uploader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
  providers: [UploaderService, LoggingService]
})
export class UploaderComponent {
  message!: string;
  constructor(
    private _uploader: UploaderService,
    public _logging: LoggingService
  ) { }

  onPicked(input: HTMLInputElement) {
    const file: any = input.files instanceof FileList ? input.files[0] : null;
    if (file) {
      this._uploader.upload(file)?.subscribe(
        message => {
          input.value = '';
          this.message = message;
        }
      );
    }
  }

}

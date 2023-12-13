import { Component, inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  //Used as a Global Loading Spinner
  public showSpinner: boolean = false;
  public _loader = inject(LoaderService)
  constructor(
    private _logService: LoggingService
  ) {
    this._loader.spinner$.subscribe((data: boolean) => {
      setTimeout(() => {
        if (data) {
          this.showSpinner = data;
        }
      });
      this._logService.logging(`Show Spinner:${this.showSpinner}`);
    })
  }

}

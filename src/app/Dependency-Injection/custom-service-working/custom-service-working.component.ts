import { Component, Inject, inject } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { CustomLoggingService } from '../CustomService';

@Component({
  selector: 'app-custom-service-working',
  templateUrl: './custom-service-working.component.html',
  styleUrls: ['./custom-service-working.component.scss'],
  //  providers:[LoggingService]
   //  providers:[{provide:'LOG_SERVICE',useClass:LoggingService}]
})
export class CustomServiceWorkingComponent {
  defaultInput:string="";
  displayMessage:string="";

  constructor(private _loggingService: LoggingService){}
  // constructor(@Inject('LOG_SERVICE')private _loggingService: LoggingService){}
  // private service = inject(LoggingService);

  onButtonClicked(){
    this.displayMessage = this.defaultInput;


    //  let logService = new CustomLoggingService();
    // logService.logging("Hello From a Reusable Service Class !!")


     this._loggingService.logging("Hello From Injected Service !");
     this._loggingService.alert("Alert from Injectable Service");
     console.log(this.defaultInput);
     this._loggingService.sendData(this.defaultInput);

  }







}

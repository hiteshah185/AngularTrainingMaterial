import { Component, Inject } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-service-consumer',
  templateUrl: './service-consumer.component.html',
  styleUrls: ['./service-consumer.component.scss'],
  //providers:[LoggingService]
})
export class ServiceConsumerComponent {

public dataFromService:string | any='';
public hasReceivedData:boolean = false;

  constructor(private _logService: LoggingService){}
  //constructor(@Inject('LOG_SERVICE') private _logService: LoggingService){}
  ngOnInit(){
    console.log(this._logService.myObserver)
    //this.onDataReceived();
  }
  onDataReceived(){
    this._logService.myObserver.subscribe(rxdData=>{
      if(rxdData){
        console.log(rxdData);
        this.dataFromService = rxdData;
        this.hasReceivedData = true;
      }
    })
  }
  
}

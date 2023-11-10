import { Component } from '@angular/core';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //providers:[LoggingService]
})
export class AppComponent {
  title = 'angular-teranet-training-project';
}

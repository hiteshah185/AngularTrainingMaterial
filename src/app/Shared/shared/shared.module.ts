import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from 'src/app/RxJs/Utility/timer/timer.component';
import { CanvasComponent } from 'src/app/RxJs/Graphics/canvas/canvas.component';
import { TimerService } from 'src/app/RxJs/Utility/timer.service';
import { NotificationService } from 'src/app/services/notification.service';

const commonModules = [
  FormsModule,
  CommonModule
]
const commonComponent = [TimerComponent,
  CanvasComponent]


@NgModule({
  declarations: [commonComponent],
  imports: [
    commonModules
  ],
  exports: [
    commonComponent,
    commonModules
  ],
  providers: [TimerService,
    NotificationService]
})
export class SharedModule { }

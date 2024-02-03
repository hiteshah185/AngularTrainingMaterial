import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from 'src/app/RxJs/Utility/timer/timer.component';
import { CanvasComponent } from 'src/app/RxJs/Graphics/canvas/canvas.component';
import { TimerService } from 'src/app/RxJs/Utility/timer.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SelectAllDirective } from 'src/app/Custom-Directives/select-all.directive';

const commonModules = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
]
const commonComponent = [TimerComponent,
  CanvasComponent]
const commonDirectives = [SelectAllDirective]

@NgModule({
  declarations: [commonComponent],
  imports: [
    commonModules,
    commonDirectives
  ],
  exports: [
    commonComponent,
    commonModules,
    commonDirectives
  ],
  providers: [TimerService,
    NotificationService]
})
export class SharedModule { }

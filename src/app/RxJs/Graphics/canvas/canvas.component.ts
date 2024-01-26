import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
import { TimerComponent } from '../../Utility/timer/timer.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements
  AfterViewInit {

  @ViewChild('canvas') public canvas: ElementRef | undefined;

  @Input() public width = 600;
  @Input() public height = 600;

  private cx: CanvasRenderingContext2D | null | undefined;
  ngAfterViewInit(): void {
    this.initializeCanvas();
    this.captureDrawingEvents(this.canvas?.nativeElement);
  }
  initializeCanvas(): void {
    const canvasEl = this.canvas?.nativeElement;

    this.cx = canvasEl.getContext('2d');

    if (!this.cx) throw 'Cannot get context';

    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
  }
  captureDrawingEvents(canvasEl: HTMLCanvasElement): void {
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap(e =>
          fromEvent(canvasEl, 'mousemove').pipe(
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            pairwise()
          )
        )
      )
      .subscribe(([prevEvent, currEvent]) => {
        const rect = canvasEl.getBoundingClientRect();
        const prevMouseEvent = prevEvent as MouseEvent;
        const currMouseEvent = currEvent as MouseEvent;

        const prevPos = this.getOffsetPosition(prevMouseEvent, rect);
        const currentPos = this.getOffsetPosition(currMouseEvent, rect);

        this.drawLine(prevPos, currentPos);
      });
  }


  getOffsetPosition(event: MouseEvent, rect: DOMRect): { x: number; y: number } {
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }
  drawLine(prevPos: { x: number; y: number }, currentPos: { x: number; y: number }): void {
    if (!this.cx) {
      return;
    }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }
  onReset() {
    this.cx?.clearRect(0, 0, this.width, this.height);
  }






}

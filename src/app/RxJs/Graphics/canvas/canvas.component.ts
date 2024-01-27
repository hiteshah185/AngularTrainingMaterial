import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, from, fromEvent, interval, of } from 'rxjs';
import { switchMap, takeUntil, pairwise, map, take } from 'rxjs/operators';
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

  onCreate() {
    const tree$ = of('apple 1', 'apple 2'); //emits an object

    const harvest$ = from(['Apple 1', 'Apple 2']); //emits within array
    const apples = ['Apple 1', 'Apple 2']
    const harvest2$ = of(...apples); //emits each apples
    // Create the apple conveyor belt (Observable)
    const appleBelt$ = new Observable(subscriber => {
      // Emit apples onto the belt
      subscriber.next('Apple 1');  // Place Apple 1 on the belt
      subscriber.next('Apple 2');  // Place Apple 2 on the belt

      // Oops! Something went wrong
      subscriber.error('Error 1'); // Belt malfunction

      // Fix the issue and continue
      subscriber.next('Apple 3');  // Place Apple 3 on the belt

      // No more apples to send
      subscriber.complete();        // Turn off the belt
    });

    // Set up a basket to catch apples (observer)
    const appleBasket = {
      next: (apple: any) => console.log(`Got a fresh apple: ${apple}`), // Worker puts apples in the basket
      error: (error: any) => console.error(`Problem on the belt: ${error}`), // Worker alerts about issues
      complete: () => console.log('Belt stopped. No more apples expected.') // Worker announces belt's end
    };

    // Start watching the basket for apples (subscribe)
    const appleSubscription = appleBelt$.subscribe(appleBasket);
    appleSubscription.unsubscribe();
    //const num = interval(1000).subscribe(console.log);

    const rxOperator = of(3, 6, 9, 12).pipe(
      map(v => v * 2),
      take(2)
    ).subscribe(value => console.log(value));
  }



}

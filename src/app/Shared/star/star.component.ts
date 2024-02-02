import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [BrowserModule, NgFor, SharedModule],
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  @Input() maxStars: number = 5;
  @Input() rating: number = 3;
  @Output() rate: EventEmitter<number> = new EventEmitter<number>();

  public starWidth: number = this.getStarWidth();
  public numberOfStars = Array(this.maxStars).fill(1);

  getStarWidth(): number {
    return this.maxStars * 18;
  }

  onRate(offsetX: number): void {
    const starIndex = Math.floor(offsetX / this.starWidth * this.maxStars);
    this.rating = starIndex + 1;
    this.rate.emit(this.rating);
  }

  onStarClick(starIndex: number): void {
    this.rating = starIndex;
    this.rate.emit(this.rating);
  }
}

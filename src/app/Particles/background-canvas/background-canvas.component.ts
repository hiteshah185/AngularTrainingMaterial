import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//Global declare
declare var particlesJS: any;

@Component({
  selector: 'app-background-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-canvas.component.html',
  styleUrls: ['./background-canvas.component.scss']
})
export class BackgroundCanvasComponent implements OnInit {
  ngOnInit(): void {
    particlesJS.load('particles', 'assets/particles.json', () => {
      console.log("Particles.js config loaded.");
    })

  }

}

import { Injectable } from '@angular/core';
import { Movie } from './Movie.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService {
  constructor() { }

  createDb() {
    return {
      movies: this.mockMovies(),
    };
  }

  private mockMovies(): Movie[] {
    const movie1 = new Movie(
      "Kaithi",
      105,
      new Date('25 Oct, 2019 05:30:00'),
    )
    const movie2 = new Movie(
      "Vikram",
      500,
      new Date('03 Jun, 2022 05:30:00')
    )
    const movie3 = new Movie(
      "Leo",
      620,
      new Date('19 Oct, 2023 05:30:00')
    )
    movie1.id = 1;
    movie2.id = 2;
    movie3.id = 3;
    const movies = [movie1, movie2, movie3];
    return movies;

  }





}

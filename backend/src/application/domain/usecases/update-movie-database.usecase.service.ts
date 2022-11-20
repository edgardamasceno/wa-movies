import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class UpdateMovieDatabaseUsecaseService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    private readonly httpService: HttpService,
  ) {}

  fetchMovies = async (limit: number) => {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`https://ghibliapi.herokuapp.com/films?limit=${limit}`)
        .pipe(
          catchError((error: any) => {
            throw 'Fetching error!';
          }),
        ),
    );

    if (data) {
      return data.map((movie: any) => {
        return {
          id: movie.id,
          title: movie.title,
          originalTitle: movie.original_title,
          originalTitleRomanised: movie.original_title_romanised,
          description: movie.description,
          director: movie.director,
          producer: movie.producer,
          year: movie.release_date,
          duration: movie.running_time,
          cover: movie.image,
          banner: movie.movie_banner,
        };
      });
    }

    return null;
  };

  execute = async (limit: number): Promise<object> => {
    const movies = await this.fetchMovies(limit);
    const result = await this.movieRepository.upsert(movies, []);
    return { affectedRows: result.raw.affectedRows };
  };
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class WipeMovieDatabaseUsecaseService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  execute = async (): Promise<object> => {
    const result = await this.movieRepository.delete({});
    return { deleted: result.affected };
  };
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class SearchMoviesUsecaseService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async execute(
    term: string,
    page: number,
    limit: number,
  ): Promise<Array<Movie>> {
    const fullTextSearchKeys = process.env.FULLTEXT_SEARCH_KEYS;
    return await this.movieRepository
      .createQueryBuilder('movie')
      .select()
      .addSelect(
        `MATCH(${fullTextSearchKeys}) AGAINST('${this.formatTerm(
          term,
        )}' IN BOOLEAN MODE)`,
        'score',
      )
      .take(limit)
      .skip((page - 1) * limit)
      .orderBy('score', 'DESC')
      .getMany()
      .then((movies) => {
        return movies.filter((movie) => movie.score > 0);
      });
  }

  private formatTerm(term: string): string {
    return term.split(' ').join('* ') + '*';
  }
}

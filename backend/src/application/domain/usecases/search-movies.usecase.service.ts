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
  ): Promise<{ movies: Array<Movie>; total: number; count: number }> {
    if (term) {
      return await this.findByTerm(term, page, limit);
    }
    return await this.findAll(page, limit);
  }

  findByTerm = async (
    term: string,
    page: number,
    limit: number,
  ): Promise<{ movies: Array<Movie>; total: number; count: number }> => {
    const fullTextSearchKeys = process.env.FULLTEXT_SEARCH_KEYS;
    const result = await this.movieRepository
      .createQueryBuilder('movie')
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

    const total = await this.movieRepository
      .createQueryBuilder('movie')
      .addSelect(
        `MATCH(${fullTextSearchKeys}) AGAINST('${this.formatTerm(
          term,
        )}' IN BOOLEAN MODE)`,
        'score',
      )
      .getMany()
      .then((movies) => {
        return movies.filter((movie) => movie.score > 0);
      })
      .then((movies) => movies.length);

    return { movies: result, total: total, count: result.length };
  };

  findAll = async (
    page: number,
    limit: number,
  ): Promise<{ movies: Array<Movie>; total: number; count: number }> => {
    const result = await this.movieRepository
      .createQueryBuilder('movie')
      .take(limit)
      .skip((page - 1) * limit)
      .orderBy('movie.year', 'DESC')
      .getMany();

    const total = await this.movieRepository
      .createQueryBuilder('movie')
      .getMany()
      .then((movies) => movies.length);

    return { movies: result, total: total, count: result.length };
  };

  private formatTerm(term: string): string {
    return term.split(' ').join('* ') + '*';
  }
}

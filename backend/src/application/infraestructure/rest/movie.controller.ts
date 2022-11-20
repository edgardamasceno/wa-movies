import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { SearchMoviesUsecaseService } from 'src/application/domain/usecases/search-movies.usecase.service';
import { MovieAdapter } from '../adapters/movie.adapter';
import { MovieResponseDTO } from './dtos/movie-response.dto';
import { PaginatedResponseDTO } from './dtos/paginated-response.dto';

@Controller('/movies')
export class MovieController {
  constructor(private readonly searchMovies: SearchMoviesUsecaseService) {}

  @Get()
  async searchByTerm(
    @Query() query: any,
  ): Promise<PaginatedResponseDTO<MovieResponseDTO>> {
    let { page, limit, terms } = query;

    page = page ? parseInt(page) : 1;
    limit = limit ? parseInt(limit) : parseInt(process.env.DEFAULT_PAGINATION);

    const result = await this.searchMovies.execute(terms || '', page, limit);

    const movies = MovieAdapter.toDTO(result.movies);

    const pagination = new PaginatedResponseDTO<MovieResponseDTO>();

    pagination.items = movies;
    pagination.currentPage = page;
    pagination.totalPages = Math.ceil(result.total / limit);
    pagination.itemsPerPage = limit;

    return pagination;
  }
}

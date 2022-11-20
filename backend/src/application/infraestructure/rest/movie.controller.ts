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
    const { page, limit, term } = query;

    const movies = MovieAdapter.toDTO(
      await this.searchMovies.execute(term || '', page || 1, limit || 10),
    );

    if (!movies) {
      throw new NotFoundException('No movies found');
    }

    const pagination = new PaginatedResponseDTO<MovieResponseDTO>();

    pagination.items = movies;
    pagination.currentPage = page;
    pagination.totalPages = 1;
    pagination.itemsPerPage = limit;

    return pagination;
  }
}

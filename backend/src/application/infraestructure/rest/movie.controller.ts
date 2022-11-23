import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SearchMoviesUsecaseService } from 'src/application/domain/usecases/search-movies.usecase.service';
import { MovieAdapter } from '../adapters/movie.adapter';
import { MovieResponseDTO } from './dtos/movie-response.dto';
import { PaginatedResponseDTO } from './dtos/paginated-response.dto';

@Controller('/movies')
export class MovieController {
  constructor(private readonly searchMovies: SearchMoviesUsecaseService) {}

  @ApiTags('movies')
  @ApiQuery({
    name: 'terms',
    required: false,
    type: String,
    description: 'Search terms',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Limit number',
  })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: PaginatedResponseDTO,
  })
  @ApiNotFoundResponse({ description: 'No records found' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get()
  async searchByTerm(
    @Query() query: { terms: string; page: number; limit: number },
  ): Promise<PaginatedResponseDTO> {
    let { page, limit, terms } = query;

    page = page ? page : 1;
    limit = limit ? limit : parseInt(process.env.DEFAULT_PAGINATION);

    const result = await this.searchMovies.execute(terms || '', page, limit);

    const movies = MovieAdapter.toDTO(result.movies) as MovieResponseDTO[];

    const pagination = new PaginatedResponseDTO();

    pagination.items = movies;
    pagination.currentPage = page;
    pagination.totalPages = Math.ceil(result.total / limit);
    pagination.itemsPerPage = limit;
    pagination.totalItems = result.total;

    return pagination;
  }
}

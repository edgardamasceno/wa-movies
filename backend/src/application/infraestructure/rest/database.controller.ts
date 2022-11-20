import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { UpdateMovieDatabaseUsecaseService } from 'src/application/domain/usecases/update-movie-database.usecase.service';
import { MovieResponseDTO } from './dtos/movie-response.dto';
import { PaginatedResponseDTO } from './dtos/paginated-response.dto';

@Controller('/database/update')
export class DatabaseController {
  constructor(
    private readonly updateMovieDatabaseService: UpdateMovieDatabaseUsecaseService,
  ) {}

  @Get()
  async updateMovieDatabase(@Query() query: any): Promise<number> {
    const { limit } = query;
    const defaultFetchLimit = process.env.DEFAULT_FETCH_LIMIT;

    return await this.updateMovieDatabaseService.execute(
      limit || defaultFetchLimit,
    );
  }
}

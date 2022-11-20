import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { UpdateMovieDatabaseUsecaseService } from 'src/application/domain/usecases/update-movie-database.usecase.service';
import { WipeMovieDatabaseUsecaseService } from 'src/application/domain/usecases/wipe-movie-database.usecase.service';
import { MovieResponseDTO } from './dtos/movie-response.dto';
import { PaginatedResponseDTO } from './dtos/paginated-response.dto';

@Controller('/database')
export class DatabaseController {
  constructor(
    private readonly updateMovieDatabaseService: UpdateMovieDatabaseUsecaseService,
    private readonly wipeMovieDatabaseService: WipeMovieDatabaseUsecaseService,
  ) {}

  @Get('/update')
  async updateMovieDatabase(@Query() query: any): Promise<object> {
    const { limit } = query;
    const defaultFetchLimit = process.env.DEFAULT_FETCH_LIMIT;

    return await this.updateMovieDatabaseService.execute(
      limit || defaultFetchLimit,
    );
  }

  @Get('/wipe')
  async wipeMovieDatabase(): Promise<object> {
    return await this.wipeMovieDatabaseService.execute();
  }
}

import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Query,
} from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateMovieDatabaseUsecaseService } from 'src/application/domain/usecases/update-movie-database.usecase.service';
import { WipeMovieDatabaseUsecaseService } from 'src/application/domain/usecases/wipe-movie-database.usecase.service';
import { MovieResponseDTO } from './dtos/movie-response.dto';
import { PaginatedResponseDTO } from './dtos/paginated-response.dto';
import { UpdateDatabaseResponseDTO } from './dtos/updated-database-response.dto';
import { WipeDatabaseResponseDTO } from './dtos/wipe-database-response.dto';

@Controller('/database')
export class DatabaseController {
  constructor(
    private readonly updateMovieDatabaseService: UpdateMovieDatabaseUsecaseService,
    private readonly wipeMovieDatabaseService: WipeMovieDatabaseUsecaseService,
  ) {}

  @ApiTags('database')
  @ApiResponse({
    status: 200,
    description: 'Get movies from https://ghibliapi.herokuapp.com/#tag/Films',
    type: UpdateDatabaseResponseDTO,
    schema: {
      example: { updated: 22 },
    },
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get('/update')
  async updateMovieDatabase(
    @Query() query: { limit: number },
  ): Promise<object> {
    const { limit } = query;
    const defaultFetchLimit = parseInt(process.env.DEFAULT_FETCH_LIMIT);

    return await this.updateMovieDatabaseService.execute(
      limit || defaultFetchLimit,
    );
  }

  @ApiTags('database')
  @ApiResponse({
    status: 200,
    description: 'Delete all movies from database',
    type: WipeDatabaseResponseDTO,
    schema: {
      example: { deleted: 22 },
    },
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Delete('/wipe')
  async wipeMovieDatabase(): Promise<object> {
    return await this.wipeMovieDatabaseService.execute();
  }
}

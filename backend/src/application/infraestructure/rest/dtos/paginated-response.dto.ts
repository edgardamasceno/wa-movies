import { ApiProperty } from '@nestjs/swagger';
import { Movie } from 'src/application/domain/entities/movie.entity';
import { MovieResponseDTO } from './movie-response.dto';

export class PaginatedResponseDTO {
  @ApiProperty({ type: [MovieResponseDTO] })
  items: Array<Movie>;

  @ApiProperty()
  currentPage: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  itemsPerPage: number;
}

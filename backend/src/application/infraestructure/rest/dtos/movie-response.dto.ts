import { ApiProperty } from '@nestjs/swagger';

export class MovieResponseDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  originalTitle: string;

  @ApiProperty()
  originalTitleRomanised: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  director: string;

  @ApiProperty()
  producer: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  duration: number;

  @ApiProperty()
  cover: string;

  @ApiProperty()
  banner: string;

  @ApiProperty()
  score: number;
}

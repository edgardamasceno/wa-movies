import { ApiProperty } from '@nestjs/swagger';

export class UpdateDatabaseResponseDTO {
  @ApiProperty()
  updated: number;
}

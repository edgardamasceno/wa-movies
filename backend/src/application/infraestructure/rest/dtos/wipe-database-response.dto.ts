import { ApiProperty } from '@nestjs/swagger';

export class WipeDatabaseResponseDTO {
  @ApiProperty()
  deleted: number;
}

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../domain/entities/movie.entity';
import { UpdateMovieDatabaseUsecaseService } from '../domain/usecases/update-movie-database.usecase.service';
import { DatabaseController } from '../infraestructure/rest/database.controller';
import { WipeMovieDatabaseUsecaseService } from '../domain/usecases/wipe-movie-database.usecase.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), HttpModule],
  controllers: [DatabaseController],
  providers: [
    UpdateMovieDatabaseUsecaseService,
    WipeMovieDatabaseUsecaseService,
  ],
})
export class DatabaseModule {}

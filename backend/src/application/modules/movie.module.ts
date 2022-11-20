import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../domain/entities/movie.entity';
import { MovieController } from '../infraestructure/rest/movie.controller';
import { SearchMoviesUsecaseService } from '../domain/usecases/search-movies.usecase.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MovieController],
  providers: [SearchMoviesUsecaseService],
})
export class MovieModule {}

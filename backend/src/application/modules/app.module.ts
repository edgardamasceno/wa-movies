import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie.module';
import { Movie } from '../domain/entities/movie.entity';
import { MovieDatabaseModule } from './movie-database.module';
import '../infraestructure/database/typeorm/polifill';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST,
      port: parseInt(process.env.MYSQL_DB_PORT) | 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Movie],
      synchronize: false,
      logging: false,
    }),
    MovieModule,
    MovieDatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

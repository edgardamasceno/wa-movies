import { Movie } from 'src/application/domain/entities/movie.entity';
import { MovieResponseDTO } from 'src/application/infraestructure/rest/dtos/movie-response.dto';

export class MovieAdapter {
  static toDTO(data: Movie | Array<Movie>): Array<MovieResponseDTO> {
    var result = null;
    if (data instanceof Movie) {
      result = {
        id: data.id,
        title: data.title,
        originalTitle: data.originalTitle,
        originalTitleRomanised: data.originalTitleRomanised,
        director: data.director,
        producer: data.producer,
        description: data.description,
        duration: data.duration,
        year: data.year,
        cover: data.cover,
        banner: data.banner,
        score: data.score,
      };
    } else if (data) {
      result = data.map((movie) => {
        return this.toDTO(movie);
      });
    }
    return result;
  }
}

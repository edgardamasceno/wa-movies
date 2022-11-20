export class MovieResponseDTO {
  id: string;
  title: string;
  originalTitle: string;
  originalTitleRomanised: string;
  description: string;
  director: string;
  producer: string;
  year: number;
  duration: number;
  score?: number;
}

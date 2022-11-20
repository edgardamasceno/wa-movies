export class PaginatedResponseDTO<T> {
  items: Array<T>;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}

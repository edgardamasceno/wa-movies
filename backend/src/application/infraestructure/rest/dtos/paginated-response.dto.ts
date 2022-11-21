export class PaginatedResponseDTO<T> {
  items: Array<T>;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface Page<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
}

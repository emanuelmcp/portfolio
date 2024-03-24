export interface Job {
  id: number;
  title: string;
  month: string;
  year: number;
  description: string[];
  actually?: boolean;
}

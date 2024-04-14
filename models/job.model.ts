export interface Job {
  id: number;
  title: string;
  company: string;
  startMonth: string;
  startYear: number;
  endMonth?: string;
  endYear?: number;
  description: string[];
  actually?: boolean;
}

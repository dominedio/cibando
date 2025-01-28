export interface Recipe{
  _id?: string;
  title: string;
  description: string;
  image: string;
  difficulty: number;
  date?: string;
  published: boolean;
}

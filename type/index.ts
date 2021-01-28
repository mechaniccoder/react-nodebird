export interface MainPost {
  id: number;
  User: { id: number; nickname: string };
  content: string;
  Images: { src: string }[];
}

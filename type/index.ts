export interface MainPost {
  id: number;
  User: { id: number; nickname: string };
  content: string;
  Images: Image[];
}

export interface Image {
  src: string;
}

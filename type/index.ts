export interface MainPost {
  id: number;
  User: { id: number; nickname: string };
  Comments: { id: number; text: string; nickname: string }[];
  content: string;
  Images: Image[];
}

export interface Image {
  src: string;
}

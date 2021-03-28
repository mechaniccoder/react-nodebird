export interface MainPost {
  id: number;
  User: { id: number; nickname: string };
  Comments: { id: number; content: string; UserId: number; PostId: number; User: any }[];
  content: string;
  Images: Image[];
}

export interface Image {
  src: string;
}

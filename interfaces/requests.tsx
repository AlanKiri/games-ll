export interface IGameRequest {
  next: string;
  results: IGame[];
}

export interface IGame {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
}

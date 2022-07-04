export interface IGameRequest {
  next: string;
  results: IGame[];
}

export interface IGame {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
  rating: number;
  ratings_count: number;
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
  ratings: {
    id: number;
    title: string;
    count: number;
    percent: number;
  }[];
  short_screenshots: {
    id: number;
    image: string;
  }[];
  genres: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
}

export interface IGameById extends IGame {
  website: string;
  updated: string;
  description: string;
  developers: {
    id: number;
    slug: string;
    name: string;
    games_counts: number;
    image_background: string;
  }[];
  publishers: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  tags: {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }[];
}

export interface IGameScreenshots {
  count: number;
  results: {
    id: number;
    image: string;
    width: number;
    height: number;
  }[];
}

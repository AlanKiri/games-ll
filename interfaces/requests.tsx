export interface IGameRequest {
  next: string;
  results: IGame[];
  count: number;
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
  description_raw: string;
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
  stores: {
    id: number;
    url: string;
    store: {
      id: number;
      name: string;
      slug: string;
      domain: string;
      games_count: number;
      image_background: string;
    };
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

export interface IGenreRequest {
  count: number;
  next: string;

  results: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    games: { id: number; slug: string; name: string; added: number }[];
  }[];
}

export interface IGenre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: { id: number; slug: string; name: string; added: number }[];
}

export interface IGenreById {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

export interface IPublishersRequest {
  count: number;
  next: string;
  results: IPublishers[];
}

export interface IPublishers {
  name: string;
  exact_name: string;
  search_name: string;
  slug: string;
  image_background: string;
  id: number;
}

export interface IPublisherById {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}
export interface IDevelopersRequest {
  count: number;
  next: string;
  results: IDevelopers[];
}

export interface IDevelopers {
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
  id: number;
  games: {
    id: number;
    slug: string;
    name: string;
  }[];
}

export interface IDeveloperById {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

export interface IStoreRequest {
  count: number;
  next: string;
  results: IStore[];
}

export interface IStore {
  id: number;
  game_id: number;
  store_id: number;
  url: string;
}

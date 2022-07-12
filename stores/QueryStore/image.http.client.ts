import {
  IDeveloperById,
  IDevelopersRequest,
  IGameById,
  IGameRequest,
  IGameScreenshots,
  IGenreById,
  IGenreRequest,
  IPublisherById,
  IPublishers,
  IPublishersRequest,
} from "./../../interfaces/requests";
import $api from "./api";

export default class HttpImageClient {
  async getGames() {
    const data = await $api.get<IGameRequest>("/games");
    return data;
  }

  async expandGames(link: string) {
    const data = await $api.get<IGameRequest>(link);
    return data;
  }

  async getGamesByQuery(query: string) {
    const data = await $api.get<IGameRequest>(`/games`, {
      params: { search: query },
    });
    return data;
  }

  async getGamesSameSeries(id: string) {
    const data = await $api.get<IGameRequest>(
      `https://api.rawg.io/api/games/${id}/game-series`
    );
    return data;
  }

  async getGamesByGenre(id: string) {
    const data = await $api.get<IGameRequest>("/games", {
      params: { genres: id },
    });
    return data;
  }

  async getGamesByPublisher(id: string) {
    const data = await $api.get<IGameRequest>("/games", {
      params: { publishers: id },
    });
    return data;
  }
  async getGamesByDeveloper(id: string) {
    const data = await $api.get<IGameRequest>("/games", {
      params: { developers: id },
    });
    return data;
  }

  async getGamesLast30(stringDate: string) {
    const data = await $api.get<IGameRequest>("/games", {
      params: { dates: stringDate },
    });
    return data;
  }

  async getGamesLastWeek(stringDate: string) {
    const data = await $api.get<IGameRequest>("/games", {
      params: { dates: stringDate },
    });
    return data;
  }

  async getGamesNextWeek(stringDate: string) {
    const data = await $api.get<IGameRequest>("/games", {
      params: { dates: stringDate },
    });
    return data;
  }

  async getGameById(id: string) {
    const data = await $api.get<IGameById>(`/games/${id}`);
    return data;
  }

  async getGameScreenshotsByiD(id: string) {
    const data = await $api.get<IGameScreenshots>(`/games/${id}/screenshots`);
    return data;
  }

  async getGenres() {
    const data = await $api.get<IGenreRequest>(`/genres`);
    return data;
  }

  async expandGenres(link: string) {
    const data = await $api.get<IGenreRequest>(link);
    return data;
  }

  async getGenreById(id: string) {
    const data = await $api.get<IGenreById>(`/genres/${id}`);
    return data;
  }

  async getPublishers() {
    const data = await $api.get<IPublishersRequest>(`/publishers`);
    return data;
  }

  async expandPublishers(link: string) {
    const data = await $api.get<IPublishersRequest>(link);
    return data;
  }

  async getPublisherById(id: string) {
    const data = await $api.get<IPublisherById>(`/publishers/${id}`);
    return data;
  }

  async getDevelopers() {
    const data = await $api.get<IDevelopersRequest>(`/developers`);
    return data;
  }

  async expandDevelopers(link: string) {
    const data = await $api.get<IDevelopersRequest>(link);
    return data;
  }

  async getDeveloperById(id: string) {
    const data = await $api.get<IDeveloperById>(`/developers/${id}`);
    return data;
  }
}

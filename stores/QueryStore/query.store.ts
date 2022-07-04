import {
  IGame,
  IGameById,
  IGameScreenshots,
} from "./../../interfaces/requests";
import { makeAutoObservable } from "mobx";
import HttpImageClient from "./image.http.client";

export default class QueryStore {
  games: IGame[] | undefined = undefined;
  game: IGameById | undefined = undefined;
  images: IGameScreenshots | undefined = undefined;
  constructor(private ImageService: HttpImageClient) {
    makeAutoObservable(this);
  }

  async getGames() {
    const data = await this.ImageService.getGames();
    this.games = data.data.results;
  }
  async getGameById({ id }: { id: string }) {
    const data = await this.ImageService.getGameById({ id });
    this.game = data.data;
  }
  async getGameScreenshotsByiD({ id }: { id: string }) {
    const data = await this.ImageService.getGameScreenshotsByiD({ id });
    this.images = data.data;
  }
}

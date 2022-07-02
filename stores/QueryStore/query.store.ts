import { IGame } from "./../../interfaces/requests";
import { makeAutoObservable } from "mobx";
import HttpImageClient from "./image.http.client";

export default class QueryStore {
  games: IGame[] | undefined = undefined;
  constructor(private ImageService: HttpImageClient) {
    makeAutoObservable(this);
  }

  async getGames() {
    const data = await this.ImageService.getGames();
    this.games = data.data.results;
  }
}

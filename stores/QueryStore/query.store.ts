import {
  IGame,
  IGameById,
  IGameScreenshots,
} from "./../../interfaces/requests";
import { makeAutoObservable } from "mobx";
import HttpImageClient from "./image.http.client";
import { addDays, subDays } from "date-fns";

export default class QueryStore {
  games: IGame[] | undefined = undefined;
  game: IGameById | undefined = undefined;
  images: IGameScreenshots | undefined = undefined;
  constructor(private ImageService: HttpImageClient) {
    makeAutoObservable(this);
  }

  dateToString(date: Date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
  }

  async getGames() {
    this.games = undefined;
    const data = await this.ImageService.getGames();
    this.games = data.data.results;
  }

  async getGamesLast30() {
    this.games = undefined;
    let today = new Date();
    let days = subDays(today, 30);
    const formattedString = `${this.dateToString(days)},${this.dateToString(
      today
    )}`;
    const data = await this.ImageService.getGamesLast30(formattedString);
    this.games = data.data.results;
  }

  async getGamesLastWeek() {
    this.games = undefined;
    let today = new Date();
    let days = subDays(today, 7);
    const formattedString = `${this.dateToString(days)},${this.dateToString(
      today
    )}`;
    const data = await this.ImageService.getGamesLastWeek(formattedString);
    this.games = data.data.results;
  }
  async getGamesNextWeek() {
    this.games = undefined;
    let today = new Date();
    let days = addDays(today, 7);
    const formattedString = `${this.dateToString(today)},${this.dateToString(
      days
    )}`;
    const data = await this.ImageService.getGamesNextWeek(formattedString);
    this.games = data.data.results;
  }

  async getGameById({ id }: { id: string }) {
    this.game = undefined;
    const data = await this.ImageService.getGameById({ id });
    this.game = data.data;
  }
  async getGameScreenshotsByiD({ id }: { id: string }) {
    this.images = undefined;
    const data = await this.ImageService.getGameScreenshotsByiD({ id });
    this.images = data.data;
  }
}

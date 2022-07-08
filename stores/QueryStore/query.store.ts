import {
  IGame,
  IGameById,
  IGameScreenshots,
  IGenre,
  IGenreById,
} from "./../../interfaces/requests";
import { action, makeAutoObservable } from "mobx";
import HttpImageClient from "./image.http.client";
import { addDays, subDays } from "date-fns";

export default class QueryStore {
  games: IGame[] | undefined = undefined;
  game: IGameById | undefined = undefined;
  images: IGameScreenshots | undefined = undefined;
  isLoading: boolean = false;
  genres: IGenre[] | undefined = undefined;
  genre: IGenreById | undefined = undefined;
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
    this.isLoading = true;
    this.games = undefined;
    const data = await this.ImageService.getGames().then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.isLoading = false;
      })
    );
  }

  async getGamesByGenre(id: string) {
    this.isLoading = true;
    this.games = undefined;
    const data = await this.ImageService.getGamesByGenre(id).then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.isLoading = false;
      })
    );
  }

  async getGamesLast30() {
    this.isLoading = true;
    this.games = undefined;
    let today = new Date();
    let days = subDays(today, 30);
    const formattedString = `${this.dateToString(days)},${this.dateToString(
      today
    )}`;
    const data = await this.ImageService.getGamesLast30(formattedString).then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.isLoading = false;
      })
    );
  }

  async getGamesLastWeek() {
    this.isLoading = true;
    this.games = undefined;
    let today = new Date();
    let days = subDays(today, 7);
    const formattedString = `${this.dateToString(days)},${this.dateToString(
      today
    )}`;
    const data = await this.ImageService.getGamesLastWeek(formattedString).then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.isLoading = false;
      })
    );
  }
  async getGamesNextWeek() {
    this.isLoading = true;
    this.games = undefined;
    let today = new Date();
    let days = addDays(today, 7);
    const formattedString = `${this.dateToString(today)},${this.dateToString(
      days
    )}`;
    const data = await this.ImageService.getGamesNextWeek(formattedString).then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.isLoading = false;
      })
    );
  }

  async getGameById(id: string) {
    this.isLoading = true;
    this.game = undefined;
    const data = await this.ImageService.getGameById(id).then(
      action("fetchSuccess", (game) => {
        this.game = game.data;
        this.isLoading = false;
      })
    );
  }
  async getGameScreenshotsByiD(id: string) {
    this.isLoading = true;
    this.images = undefined;
    const data = await this.ImageService.getGameScreenshotsByiD(id).then(
      action("fetchSuccess", (images) => {
        this.images = images.data;
        this.isLoading = false;
      })
    );
  }

  async getGenres() {
    this.isLoading = true;
    this.genres = undefined;
    const data = await this.ImageService.getGenres().then(
      action("fetchSuccess", (genres) => {
        this.genres = genres.data.results;
        this.isLoading = false;
      })
    );
  }

  async getGenreById(id: string) {
    this.isLoading = true;
    this.genre = undefined;
    const data = await this.ImageService.getGenreById(id).then(
      action("fetchSuccess", (genre) => {
        this.genre = genre.data;
        this.isLoading = false;
      })
    );
  }
}

import {
  IGame,
  IGameById,
  IGameScreenshots,
  IGenre,
  IGenreById,
  IPublisherById,
  IPublishers,
} from "./../../interfaces/requests";
import { action, makeAutoObservable } from "mobx";
import HttpImageClient from "./image.http.client";
import { addDays, subDays } from "date-fns";

export default class QueryStore {
  games?: IGame[] = undefined;
  game?: IGameById = undefined;
  images?: IGameScreenshots = undefined;
  isLoading: boolean = false;
  genres?: IGenre[] = undefined;
  genre?: IGenreById = undefined;
  next?: string = undefined;
  count?: number = undefined;
  publishers?: IPublishers[] = undefined;
  publisher?: IPublisherById = undefined;
  constructor(private ImageService: HttpImageClient) {
    makeAutoObservable(this, {}, { autoBind: true });
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
    await this.ImageService.getGames().then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.next = games.data.next;
        this.count = games.data.count;
        this.isLoading = false;
      })
    );
  }

  async expandGames() {
    if (!this.next) return;
    await this.ImageService.expandGames(this.next).then(
      action("fetchSuccess", (games) => {
        this.games?.push(...games.data.results);
        this.next = games.data.next;
      })
    );
  }

  async getGamesByQuery(query: string) {
    this.isLoading = true;
    this.games = undefined;
    await this.ImageService.getGamesByQuery(query).then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.next = games.data.next;
        this.count = games.data.count;
        this.isLoading = false;
        console.log(this.games);
      })
    );
  }

  async getGamesSameSeries(id: string) {
    this.isLoading = true;
    this.games = undefined;
    await this.ImageService.getGamesSameSeries(id).then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.isLoading = false;
      })
    );
  }

  async getGamesByGenre(id: string) {
    this.isLoading = true;
    this.games = undefined;
    await this.ImageService.getGamesByGenre(id).then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.next = games.data.next;
        this.count = games.data.count;
        this.isLoading = false;
      })
    );
  }
  async getGamesByPublisher(id: string) {
    this.isLoading = true;
    this.games = undefined;
    await this.ImageService.getGamesByPublisher(id).then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.next = games.data.next;
        this.count = games.data.count;
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
    await this.ImageService.getGamesLast30(formattedString).then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.next = games.data.next;
        this.count = games.data.count;
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
    await this.ImageService.getGamesLastWeek(formattedString).then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.next = games.data.next;
        this.count = games.data.count;
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
    await this.ImageService.getGamesNextWeek(formattedString).then(
      action("fetchSuccess", (games) => {
        this.games = games.data.results;
        this.isLoading = false;
        this.next = games.data.next;
        this.count = games.data.count;
      })
    );
  }

  async getGameById(id: string) {
    this.isLoading = true;
    this.game = undefined;
    await this.ImageService.getGameById(id).then(
      action("fetchSuccess", (game) => {
        this.game = game.data;
        this.isLoading = false;
      })
    );
  }
  async getGameScreenshotsByiD(id: string) {
    this.isLoading = true;
    this.images = undefined;
    await this.ImageService.getGameScreenshotsByiD(id).then(
      action("fetchSuccess", (images) => {
        this.images = images.data;
        this.isLoading = false;
      })
    );
  }

  async getGenres() {
    this.isLoading = true;
    this.genres = undefined;
    await this.ImageService.getGenres().then(
      action("fetchSuccess", (genres) => {
        this.genres = genres.data.results;
        this.isLoading = false;
        this.next = genres.data.next;
        this.count = genres.data.count;
      })
    );
  }

  async expandGenres() {
    if (!this.next) return;
    await this.ImageService.expandGenres(this.next).then(
      action("fetchSuccess", (genres) => {
        this.genres?.push(...genres.data.results);
        this.next = genres.data.next;
      })
    );
  }

  async getGenreById(id: string) {
    this.isLoading = true;
    this.genre = undefined;
    await this.ImageService.getGenreById(id).then(
      action("fetchSuccess", (genre) => {
        this.genre = genre.data;
        this.isLoading = false;
      })
    );
  }

  async getPublishers() {
    this.isLoading = true;
    this.genres = undefined;
    await this.ImageService.getPublishers().then(
      action("fetchSuccess", (publishers) => {
        this.publishers = publishers.data.results;
        this.isLoading = false;
        this.next = publishers.data.next;
        this.count = publishers.data.count;
      })
    );
  }

  async expandPublishers() {
    if (!this.next) return;
    await this.ImageService.expandPublishers(this.next).then(
      action("fetchSuccess", (publishers) => {
        this.publishers?.push(...publishers.data.results);
        this.next = publishers.data.next;
      })
    );
  }

  async getPublisherById(id: string) {
    this.isLoading = true;
    this.publisher = undefined;
    await this.ImageService.getPublisherById(id).then(
      action("fetchSuccess", (publisher) => {
        this.publisher = publisher.data;
        this.isLoading = false;
      })
    );
  }
}

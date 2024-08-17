import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class Instance {
  private readonly baseURL = `https://jsonplaceholder.typicode.com/`;

  private readonly _axiosInstance: AxiosInstance;

  get axiosInstance() {
    return this._axiosInstance;
  }

  constructor() {
    this._axiosInstance = axios.create({ baseURL: this.baseURL });

    //TODO: I'll must to create request and response function
  }
}

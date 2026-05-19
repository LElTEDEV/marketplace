import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

const getBaseURL = () => {
  return Platform.select({
    ios: "http://localhost:3001",
    android: "http://192.168.10.241:3001",
  });
};

const baseURL = getBaseURL();

export class MarketPlaceAPIClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const marketPlaceAPIClient = new MarketPlaceAPIClient().getInstance();

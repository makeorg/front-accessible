/* @flow */
import { type TypeToken } from './types';

export { NODE_API_BASE } from './ApiService.shared';

export interface IApiServiceStrategy {
  callApi(url: string, options: Object): Promise<any>;
  set token(token: TypeToken): void;
  get token(): ?TypeToken;
  get country(): string;
  get language(): string;
  get source(): string;
}

class ApiServiceClass {
  _strategy: IApiServiceStrategy;

  set strategy(strategy: IApiServiceStrategy) {
    this._strategy = strategy;
  }

  get strategy() {
    if (!this._strategy) throw new Error('No ApiService strategy configured');
    return this._strategy;
  }

  callApi(url: string, options: Object = {}): Promise<any> {
    return this.strategy.callApi(url, options);
  }

  set token(token: TypeToken): void {
    this.strategy.token = token;
  }

  get token(): ?TypeToken {
    return this.strategy.token;
  }

  get country(): string {
    return this.strategy.country;
  }

  get language(): string {
    return this.strategy.language;
  }

  get source(): string {
    return this.strategy.source;
  }
}

export const ApiService = new ApiServiceClass();

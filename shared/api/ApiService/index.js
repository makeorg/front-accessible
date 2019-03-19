/* @flow */

export { NODE_API_BASE } from './ApiService.shared';

export interface IApiServiceStrategy {
  callApi(url: string, options: Object): Promise<any>;
  get country(): string;
  get language(): string;
  get source(): string;
  get questionId(): string;
  get referrer(): string;
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

  get country(): string {
    return this.strategy.country;
  }

  get language(): string {
    return this.strategy.language;
  }

  get source(): string {
    return this.strategy.source;
  }

  get questionId(): string {
    return this.strategy.questionId;
  }

  get referrer(): string {
    return this.strategy.referrer;
  }
}

export const ApiService = new ApiServiceClass();

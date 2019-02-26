import { ApiServiceShared } from './ApiService.shared';
import { IApiServiceStrategy } from './index';

export class ApiServiceServer implements IApiServiceStrategy {
  // eslint-disable-next-line class-methods-use-this
  callApi(url: string, options: Object = {}): Promise<any> {
    return ApiServiceShared.callApi(url, options);
  }

  // eslint-disable-next-line class-methods-use-this
  get country(): string {
    return undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  get language(): string {
    return undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  get source(): string {
    return undefined;
  }
}

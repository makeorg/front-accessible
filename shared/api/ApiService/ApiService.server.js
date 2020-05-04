import https from 'https';
import { ApiServiceShared } from './ApiService.shared';
import { IApiServiceStrategy } from './index';

export class ApiServiceServer implements IApiServiceStrategy {
  // eslint-disable-next-line class-methods-use-this
  callApi(url: string, options: Object = {}): Promise<any> {
    const headers = {
      'x-make-source': 'core',
      ...options.headers,
    };

    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
    const serverOptions = { httpsAgent: agent, ...options };

    return ApiServiceShared.callApi(url, {
      ...serverOptions,
      headers,
    });
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

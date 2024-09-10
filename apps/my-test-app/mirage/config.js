import { createServer } from 'miragejs';
import ENV from 'intercom-directory/config/environment';

export default function (config) {
  return createServer({
    ...config,
    logging: false,
    routes() {
      this.namespace = 'web/api';
      this.timing = ENV.environment === 'test' ? 0 : 400;
    },
  });
}

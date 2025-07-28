import { JsonBigIntOptions } from './lib';
import { newParse } from './parse';
import { stringify } from './stringify';

const parse = newParse();
export const JSONB = Object.assign(
  (options?: JsonBigIntOptions) => {
    return {
      parse: newParse(options),
      stringify,
    };
  },
  // default options
  { parse, stringify }
);
export { parse, stringify };

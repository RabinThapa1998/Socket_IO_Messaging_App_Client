import { DEV_ENV } from "./dev";
import { PROD_ENV } from "./prod";

export const config = import.meta.env.PROD === true ? PROD_ENV : DEV_ENV;

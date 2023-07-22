import {
  EXPIRED_API_KEY_AND_NOT_REGISTER_API_KEY,
  RE_INPUT_APIKEY_TYPING_WRONG_TOKEN,
  STATUS_CODE_401,
  STATUS_CODE_403,
} from ".";

export type ErrorName =
  | "jwt must be provided"
  | 'Invalid character in header content ["Authorization"]'
  | "Request failed with status code 401";

export type ErrorListItem = {
  message: string;
  status: number;
};

export const errorList: Record<ErrorName, ErrorListItem> = {
  "Request failed with status code 401": {
    message: RE_INPUT_APIKEY_TYPING_WRONG_TOKEN,
    status: STATUS_CODE_401,
  },
  'Invalid character in header content ["Authorization"]': {
    message: RE_INPUT_APIKEY_TYPING_WRONG_TOKEN,
    status: STATUS_CODE_401,
  },
  "jwt must be provided": {
    message: EXPIRED_API_KEY_AND_NOT_REGISTER_API_KEY,
    status: STATUS_CODE_403,
  },
};

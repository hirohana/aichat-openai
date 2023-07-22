import {
  EXPIRED_API_KEY_AND_NOT_REGISTER_API_KEY,
  RE_INPUT_APIKEY_TYPING_WRONG_TOKEN,
  STATUS_CODE_403,
} from ".";

export type ErrorName =
  | "jwt must be provided"
  | 'Invalid character in header content ["Authorization"]';

export type ErrorListItem = {
  message: string;
  status: number;
};

export const errorList: Record<ErrorName, ErrorListItem> = {
  "jwt must be provided": {
    message: EXPIRED_API_KEY_AND_NOT_REGISTER_API_KEY,
    status: STATUS_CODE_403,
  },
  'Invalid character in header content ["Authorization"]': {
    message: RE_INPUT_APIKEY_TYPING_WRONG_TOKEN,
    status: STATUS_CODE_403,
  },
};

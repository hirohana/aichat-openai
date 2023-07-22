import { EXPIRED_API_KEY_AND_NOT_REGISTER_API_KEY, STATUS_CODE_403 } from ".";

export type ErrorName = "JsonWebTokenError";

export type ErrorListItem = {
  message: string;
  status: number;
};

export const errorList: Record<ErrorName, ErrorListItem> = {
  JsonWebTokenError: {
    message: EXPIRED_API_KEY_AND_NOT_REGISTER_API_KEY,
    status: STATUS_CODE_403,
  },
};

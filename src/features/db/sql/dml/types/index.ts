export type User = {
  id: string;
  name: string;
  image: string;
};

export type ErrorInformation = {
  error_message: string;
  error_code: number;
  user_id: number | null;
  request_url: string | null;
  stack_trace: string;
  sql_state: number;
};

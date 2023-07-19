import { DataSource } from "./DataSource";
import type { ErrorInformation } from "../types";

class Error_logs {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  public async insert({
    error_message,
    error_code,
    user_id,
    request_url,
    stack_trace,
    sql_state,
  }: ErrorInformation): Promise<boolean> {
    const query =
      "INSERT INTO txn_error_logs (`error_message`, `error_code`, `user_id`, `request_url`, `stack_trace`, `sql_state`) VALUES (?, ?, ?, ?, ?, ?)";
    const params = [
      error_message,
      error_code,
      user_id,
      request_url,
      stack_trace,
      sql_state,
    ];

    // TODO [result]をany型ではなく、適切な型に修正を行う。
    const [result]: any[] = await this.dataSource.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    this.dataSource.closeConnection();
    return isSuccess;
  }
}

export { Error_logs };

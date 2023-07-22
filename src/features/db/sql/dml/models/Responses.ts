import { AIResponse } from "../types";
import { DataSource } from "./DataSource";

export class Responses {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public async insert(response: AIResponse) {
    const { theme_id, content } = response;
    const query =
      "INSERT INTO txn_responses (`theme_id`, `content`) VALUES(?, ?)";
    const params = [theme_id, content];

    const [result]: any = await this.dataSource.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    return isSuccess;
  }

  public delete(theme_id: string) {}
}

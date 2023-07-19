import { Abstract } from "./Abstract";

import type { AIResponse } from "../types";

export class Responses extends Abstract {
  public async insert(response: AIResponse) {
    const { theme_id, content } = response;
    const query =
      "INSERT INTO FROM txn_responses (`theme_id`, `content`) VALUES(?, ?)";
    const params = [theme_id, content];

    const [result]: any = await this.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    return isSuccess;
  }

  public delete(theme_id: string) {}
}

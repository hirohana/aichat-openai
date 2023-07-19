import { Abstract } from "./Abstract";

import type { UserMessage } from "../types";

export class Messages extends Abstract {
  public async insert(message: UserMessage) {
    const { theme_id, content } = message;
    const query =
      "INSERT INTO txn_messages (`theme_id`, `content`) VALUES(?, ?)";
    const params = [theme_id, content];

    const [result]: any = await this.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    return isSuccess;
  }

  public delete(theme_id: string) {}
}

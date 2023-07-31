import { DataSource } from "./DataSource";

import type { Theme, themeList } from "../types";

export class Themes {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public async selectByUserId(userId: string): Promise<themeList> {
    const query =
      "SELECT `id`, `theme`, `created_at` FROM txn_themes WHERE created_by = ? ORDER BY created_at DESC";
    const params = [userId];

    const [result]: [themeList] = await this.dataSource.executeQuery(
      query,
      params
    );
    return result;
  }

  /* MEMO SQL TEST
    const query = `SELECT me.id, me.theme_id, me.content, me.created_at, re.id, re.theme_id, re.content, re.created_at
                    FROM txn_messages as me
                    JOIN txn_responses as re
                      ON me.theme_id = re.theme_id
                    WHERE me.theme_id = ?
                    ORDER BY me.created_at, re.created_at;      
    `
  */

  public async selectById(id: string) {
    const query = `SELECT th.id, th.title, th.user_id, me.content, re.content
        FROM txn_themes as th 
        JOIN txn_messages as me 
          ON th.id = me.theme_id 
        JOIN txn_responses as re 
          ON th.id = re.theme_id
        WHERE th.id = ?
        ORDER BY DESC`;
    const params = [id];

    const [result]: any = await this.dataSource.executeQuery(query, params);
    const isExist = result.length > 0;
    return isExist;
  }

  public async insert(theme: Theme) {
    const { id, title, user_id } = theme;
    const query =
      "INSERT INTO txn_themes (`id`, `title`, `user_id`) VALUES (?, ?, ?)";
    const params = [id, title, user_id];

    const [result]: any = await this.dataSource.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    return isSuccess;
  }

  public delete(id: string) {}
}

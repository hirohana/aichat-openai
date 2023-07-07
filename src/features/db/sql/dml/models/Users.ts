import mysql from "mysql2/promise";
import type { User } from "../types/index";

class Users {
  private DATABASE_URL = process.env.DATABASE_URL as string;

  private async executeQuery(query: string, params: any[]): Promise<any> {
    const connection = await mysql.createConnection(this.DATABASE_URL);
    let statement: mysql.PreparedStatementInfo | null = null;

    try {
      statement = await connection.prepare(query);
      const result = await statement.execute(params);
      return result;
    } catch (err) {
      // TODO Error_log テーブルにエラー情報を格納する。
      console.error(`err: ${err}`);
      throw new Error(`Error: ${err}`);
    } finally {
      if (statement) {
        await statement.close();
      }
      connection.end();
    }
  }

  public async exist(name: User["name"]): Promise<boolean> {
    const query = "SELECT * FROM txn_users WHERE name = ?";
    const params = [name];

    // TODO [result]をany型ではなく、適切な型に修正を行う。
    const [result]: any = await this.executeQuery(query, params);
    const isExist = result.length > 0;
    return isExist;
  }

  public async insert(user: User): Promise<boolean> {
    const query =
      "INSERT INTO txn_users (`name`, `image_url`, `updated_by`) VALUES (?, ?, ?)";
    const params = [user.name, user.image, user.name];

    // TODO [result]をany型ではなく、適切な型に修正を行う。
    const [result]: any = await this.executeQuery(query, params);
    const isSuccess = result.affectedRows > 0;
    return isSuccess;
  }

  // TODO Google OAuthに登録されているユーザー情報が更新されることを考慮して、作る必要があるかもしれない。
  public update(user: User) {}

  // TODO 物理削除(ソフトデリート)でユーザーを削除するメソッド。余裕があれば実装する。
  public delete() {}
}

export { Users };

import mysql from "mysql2/promise";

class Abstract {
  protected DATABASE_URL = process.env.DATABASE_URL as string;

  /**
   * データベース操作を実行する関数。
   * @throws {Error} エラーハンドリングは呼び出し元で定義してください。
   * 1. catch節の中にtxn_error_logsテーブルに例外の内容を送信してください。
   * 2. ユーザーに対して適切なフィードバック方法を実装してください。
   */
  protected async executeQuery(query: string, params: any[]): Promise<any> {
    let connection: mysql.Connection | null = null;
    let statement: mysql.PreparedStatementInfo | null = null;

    try {
      connection = await mysql.createConnection(this.DATABASE_URL);
      statement = await connection.prepare(query);
      const result = await statement.execute(params);
      return result;
    } finally {
      if (statement) await statement.close();
      if (connection) await connection.end();
    }
  }

  public beginTransaction() {}

  public commit() {}

  public rollback() {}
}

export { Abstract };

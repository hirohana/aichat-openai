import mysql from "mysql2/promise";

class Abstract {
  protected DATABASE_URL = process.env.DATABASE_URL as string;

  protected async executeQuery(query: string, params: any[]): Promise<any> {
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

  public beginTransaction() {}

  public commit() {}

  public rollback() {}
}

export { Abstract };

import mysql from "mysql2/promise";

export class DataSource {
  private connection: mysql.Connection | null = null;
  private DATABASE_URL = process.env.DATABASE_URL as string;

  private async connect() {
    this.connection = await mysql.createConnection(this.DATABASE_URL);
  }

  public async executeQuery(query: string, params: any[]): Promise<any> {
    if (!this.connection) {
      await this.connect();
    }

    let statement: mysql.PreparedStatementInfo | null = null;

    try {
      statement = await this.connection!.prepare(query);
      const result = await statement.execute(params);
      return result;
    } catch (err) {
      throw err;
    } finally {
      if (statement) await statement.close();
    }
  }

  public async getConnection() {
    if (!this.connection) {
      await this.connect();
    }
    return this.connection;
  }
}

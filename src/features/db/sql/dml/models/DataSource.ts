import mysql from "mysql2/promise";

export class DataSource {
  private connection: mysql.Connection | null = null;
  private DATABASE_URL = process.env.DATABASE_URL as string;

  private static instance: DataSource | null = null;

  private constructor() {
    // プライベートコンストラクタを使用して直接インスタンスを作成できないようにする
  }

  public static getInstance(): DataSource {
    if (!DataSource.instance) {
      DataSource.instance = new DataSource();
    }
    return DataSource.instance;
  }

  private async initializeConnection() {
    if (!this.connection) {
      try {
        this.connection = await mysql.createConnection(this.DATABASE_URL);
      } catch (err) {
        throw new Error("Failed to initialize database connection.");
      }
    }
  }

  public async executeQuery(query: string, params: any[]): Promise<any> {
    let statement: mysql.PreparedStatementInfo | null = null;

    try {
      await this.initializeConnection();
      statement = await this.connection!.prepare(query);
      const result = await statement.execute(params);
      return result;
    } catch (err) {
      throw err;
    } finally {
      if (statement) await statement.close();
    }
  }

  public getConnection() {
    if (!this.connection) {
      throw new Error("Connection is not initialized.");
    }
    return this.connection;
  }

  public async closeConnection() {
    if (this.connection) {
      await this.connection.end();
      this.connection = null;
    }
  }
}

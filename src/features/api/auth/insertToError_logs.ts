import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { Error_logs } from "src/features/db/sql/dml/models/Error_logs";
import { GenericQuery } from "src/features/db/sql/dml/models/GenericQuery";

// TODO user_idとrequest_urlを取得するコードを記述する。
export async function insertToError_logs(err: any, dataSource: DataSource) {
  const errorObj = {
    error_message: err.code ?? null,
    error_code: err.errno ?? null,
    user_id: null,
    request_url: null,
    stack_trace: err.stack ?? null,
    sql_state: err.sqlState ?? null,
  };

  const genericQuery = new GenericQuery(dataSource);
  const errorLogs = new Error_logs(dataSource);

  try {
    await genericQuery.performQuery(async () => {
      await errorLogs.insert(errorObj);
    });
  } catch (err) {
    throw err;
  }
}

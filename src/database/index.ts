import { Connection, createConnection as createTypeormConnection, getConnectionOptions } from "typeorm";

export async function createConnection (): Promise<Connection> {
  const defaultOptions = await getConnectionOptions();

  return createTypeormConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV !== "test"
          ? "plantmanager_test"
          : defaultOptions.database,
    })
  );
};

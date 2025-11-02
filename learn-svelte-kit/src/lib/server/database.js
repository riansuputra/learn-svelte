import { DB_HOST, DB_PORT } from "$env/static/private";

export function connect() {
  console.log(`connect to databsae : ${DB_HOST}:${DB_PORT}`);
}

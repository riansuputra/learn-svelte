import { connect } from "$lib/server/database";
export async function load() {
  return {
    counter: 1,
  };
}

export async function load({ parent }) {
  const data = await parent();

  return {
    description: `Wallet ${data.user}`,
    balance: 1000000,
  };
}

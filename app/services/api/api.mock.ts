import MockAdapter from "axios-mock-adapter"
import { Accounts, Transactions, AllTransactions } from "./infoRoutes"
import { api } from "./api"

const mock = new MockAdapter(api.apisauce.axiosInstance)

mock.onGet("/accounts").reply(200, { Accounts })
// const [, id] = config.url.match(/\/accounts\/(\d+)\/transactions/)

mock.onGet("/transactions").reply(200, { Transactions })

mock.onGet("/allTransactions").reply(200, { AllTransactions })

const accountTransactionsCounters = {
  [0]: 1,
  [1]: 1,
  [2]: 1,
  [3]: 1,
  [4]: Transactions.length,
}

mock.onGet(/\/accounts\/\d+\/transactions/).reply((config) => {
  const [, id] = config.url.match(/\/accounts\/(\d+)\/transactions/)
  const res =
    Number(id) === 4
      ? Transactions
      : Transactions.slice(-Math.min(accountTransactionsCounters[id]++, 5))
  return [200, res]
})

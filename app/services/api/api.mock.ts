import MockAdapter from "axios-mock-adapter"
import { Accounts, Transactions, AllTransactions } from "./infoRoutes"
import { api } from "./api"

const mock = new MockAdapter(api.apisauce.axiosInstance, { delayResponse: 300 })

mock.onGet("/accounts").reply(200, { Accounts })

let accountTransactionsCounters = {
  [1]: 1,
  [2]: 1,
  [3]: 1,
}

mock.onGet("/allTransactions").reply(200, { AllTransactions })

mock.onGet(/\/accounts\/\d+\/transactions/).reply((config) => {
  const [, id] = config.url.match(/\/accounts\/(\d+)\/transactions/)
  return [200, Transactions.slice(-accountTransactionsCounters[id]++)]
})

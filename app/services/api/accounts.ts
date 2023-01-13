import axios from "axios"
import MockAdapter from "axios-mock-adapter"

// const axios = require("axios")
// const MockAdapter = require("axios-mock-adapter")

const mock = new MockAdapter(axios)

mock.onGet("/accounts").reply(200, {
  accounts: [
    {
      id: "1234-4567-3456-3456",
      currentBalance: "76.451,00",
    },
    {
      id: "1234-4567-3456-3457",
      currentBalance: "8.569.00",
    },
    {
      id: "1234-4567-3456-3458",
      currentBalance: "50.513,00",
    },
    {
      id: "1234-4567-3456-3459",
      currentBalance: "751.216,00",
    },
  ],
})

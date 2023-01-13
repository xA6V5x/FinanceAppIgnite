// import axios from "axios"
// import MockAdapter from "axios-mock-adapter"

const axios = require("axios")
const MockAdapter = require("axios-mock-adapter")

import car from "../../../assets/transactions/car.png"
import restaurant from "../../../assets/transactions/restaurant.png"
import construction from "../../../assets/transactions/construction.png"
import person from "../../../assets/transactions/person.png"
import travels from "../../../assets/transactions/travels.png"

const mock = new MockAdapter(axios)

mock.onGet("/AllTransactions").reply(200, {
  AllTransactions: [
    {
      type: false,
      icon: car,
      title: "'Golub' Taxi Transportation",
      date: "20th May, 18:39",
      amount: "345,00",
      currency: "EUR",
    },
    {
      type: false,
      icon: restaurant,
      title: "'Francois' Dinner",
      date: "15th May, 20:56",
      amount: "1.158,00",
      currency: "EUR",
    },
    {
      type: false,
      icon: travels,
      title: "'AirMax' Travel to Paris",
      date: "14th May, 16:00",
      amount: "813,00",
      currency: "EUR",
    },
    {
      type: true,
      icon: construction,
      title: "Construction Itd.",
      date: "11th May, 09:26",
      amount: "24.500,00",
      currency: "USD",
    },
    {
      type: true,
      icon: person,
      title: "Rober Smith",
      date: "03rd May, 12:06",
      amount: "11.215,00",
      currency: "USD",
    },
    {
      type: false,
      icon: car,
      title: "'Golub' Taxi Transportation",
      date: "20th May, 18:39",
      amount: "345,00",
      currency: "EUR",
    },
    {
      type: false,
      icon: restaurant,
      title: "'Francois' Dinner",
      date: "15th May, 20:56",
      amount: "1.158,00",
      currency: "EUR",
    },
    {
      type: false,
      icon: travels,
      title: "'AirMax' Travel to Paris",
      date: "14th May, 16:00",
      amount: "813,00",
      currency: "EUR",
    },
    {
      type: true,
      icon: construction,
      title: "Construction Itd.",
      date: "11th May, 09:26",
      amount: "24.500,00",
      currency: "USD",
    },
    {
      type: true,
      icon: person,
      title: "Rober Smith",
      date: "03rd May, 12:06",
      amount: "11.215,00",
      currency: "USD",
    },
  ],
})

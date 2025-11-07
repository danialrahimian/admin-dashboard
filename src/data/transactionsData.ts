import type { lastTransactions } from "../Types/lastTransactions";

export const transactionsData: lastTransactions[] = [
  {
    id: 1,
    name: "Ali Connors",
    date: "2025-05-12",
    amount: 245.5,
    status: {
      type: "success",
      text: "Completed",
    },
  },
  {
    id: 2,
    name: "Jamie Lannister",
    date: "2025-05-13",
    amount: 128.0,
    status: {
      type: "warning",
      text: "Pending",
    },
  },
  {
    id: 3,
    name: "Daenerys Targaryen",
    date: "2025-05-13",
    amount: 560.75,
    status: {
      type: "success",
      text: "Completed",
    },
  },
  {
    id: 4,
    name: "Jon Snow",
    date: "2025-05-14",
    amount: 99.99,
    status: {
      type: "error",
      text: "Failed",
    },
  },
  {
    id: 5,
    name: "Arya Stark",
    date: "2025-05-14",
    amount: 320.4,
    status: {
      type: "success",
      text: "Completed",
    },
  },
  {
    id: 6,
    name: "Cersei Lannister",
    date: "2025-05-14",
    amount: 420.0,
    status: {
      type: "warning",
      text: "Pending",
    },
  },
  {
    id: 7,
    name: "Tyrion Lannister",
    date: "2025-05-15",
    amount: 199.95,
    status: {
      type: "success",
      text: "Completed",
    },
  },
  {
    id: 8,
    name: "Sandor Clegane",
    date: "2025-05-16",
    amount: 75.99,
    status: {
      type: "info",
      text: "Refunded",
    },
  },
];

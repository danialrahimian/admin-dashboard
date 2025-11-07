type TransactionStatus = "success" | "info" | "warning" | "error";

export type lastTransactions = {
  id: number;
  name: string;
  date: string;
  amount: number;
  status: {
    type: TransactionStatus;
    text: string;
  };
};

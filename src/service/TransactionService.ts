import type { CreateTransaction } from "@/interface/ITransaction";
import type { TransactionResponse } from "@/interface/ITransactionReponse";
import { api } from "./api";

export const TransactionService = {
  create: async (data: CreateTransaction) => {
    const reponse = await api.post("/transactions", data);
    return reponse.data;
  },
  findAll: async (): Promise<TransactionResponse[]> => {
    const reponse = await api.get("/transactions");
    return reponse.data;
  },
};

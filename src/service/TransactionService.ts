import { api } from "./api";
import type { CreateTransaction } from "@/interface/ITransaction";
import type { TransactionResponse } from "@/interface/ITransactionReponse";
import type { TransactionReport } from "@/interface/ITransactionReport";

export const TransactionService = {
  create: async (data: CreateTransaction) => {
    const reponse = await api.post("/transactions", data);
    return reponse.data;
  },
  findAll: async (): Promise<TransactionResponse[]> => {
    const reponse = await api.get("/transactions");
    return reponse.data;
  },
  findReportByType: async (type: string): Promise<TransactionReport> => {
    const reponse = await api.get(`/transactions/${type}`);
    return reponse.data;
  },
};

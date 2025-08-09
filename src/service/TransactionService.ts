import { type TransactionDto } from "@/types/TransactionDto";
import { api } from "./api";

export const TransactionService = {
  create: async (data: TransactionDto) => {
    const reponse = await api.post("/transactions", data);
    return reponse.data;
  },
};

import { TransactionService } from "@/service/TransactionService";
import type { CreateTransaction } from "@/interface/ITransaction";

export const createTransactionUseCase = async (data: CreateTransaction) => {
  return TransactionService.create(data);
};

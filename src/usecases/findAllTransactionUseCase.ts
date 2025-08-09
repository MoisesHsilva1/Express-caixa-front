import { TransactionService } from "@/service/TransactionService";

export const findAllTransactionUseCase = async () => {
  return TransactionService.findAll();
};

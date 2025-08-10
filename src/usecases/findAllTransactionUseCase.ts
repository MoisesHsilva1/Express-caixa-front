import type { TransactionResponse } from "@/interface/ITransactionReponse";
import { TransactionService } from "@/service/TransactionService";

export const findAllTransactionUseCase = async (): Promise<
  TransactionResponse[]
> => {
  return TransactionService.findAll();
};

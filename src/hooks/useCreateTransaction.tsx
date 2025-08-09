import type { TransactionDto } from "@/types/TransactionDto";
import { createTransactionUseCase } from "@/usecases/createTransactionUseCase";
import { useMutation } from "@tanstack/react-query";

export const useCreateTransaction = () => {
  return useMutation({
    mutationFn: (transaction: TransactionDto) =>
      createTransactionUseCase(transaction),
  });
};

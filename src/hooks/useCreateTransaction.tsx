import type { CreateTransaction } from "@/interface/ITransaction";
import { createTransactionUseCase } from "@/usecases/createTransactionUseCase";
import { useMutation } from "@tanstack/react-query";

export const useCreateTransaction = () => {
  return useMutation({
    mutationFn: (transaction: CreateTransaction) =>
      createTransactionUseCase(transaction),
  });
};

import { findAllTransactionUseCase } from "@/usecases/findAllTransactionUseCase";
import { useQuery } from "@tanstack/react-query";

export const useTransaction = () => {
  return useQuery({
    queryKey: ["findAllTransactions"],
    queryFn: () => findAllTransactionUseCase(),
  });
};

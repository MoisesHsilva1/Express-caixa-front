import { findTransactionReport } from "@/usecases/findTransactionReportUseCase";
import { useQuery } from "@tanstack/react-query";

export const useTransactionReport = () => {
  return useQuery({
    queryKey: ["findTransactionReport"],
    queryFn: () => findTransactionReport(),
  });
};

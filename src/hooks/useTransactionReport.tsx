import { findReportByTypeUseCase } from "@/usecases/findReportByTypeUseCase";
import { useQuery } from "@tanstack/react-query";

export const useTransactionReportByType = (type: string) => {
  return useQuery({
    queryKey: ["findTransactionReport"],
    queryFn: () => findReportByTypeUseCase(type),
    enabled: !!type,
  });
};

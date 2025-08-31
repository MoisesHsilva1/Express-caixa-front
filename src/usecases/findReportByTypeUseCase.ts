import type { TransactionReport } from "@/interface/ITransactionReport";
import { TransactionService } from "@/service/TransactionService";

export const findReportByTypeUseCase = async (
  type: string
): Promise<TransactionReport> => {
  return TransactionService.findReportByType(type);
};

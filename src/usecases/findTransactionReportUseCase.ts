import type { TransactionReport } from "@/interface/ITransactionReport";
import { TransactionService } from "@/service/TransactionService";

export const findTransactionReport = async (): Promise<TransactionReport> => {
  return TransactionService.findReport();
};

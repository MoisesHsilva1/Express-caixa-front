import { TransactionService } from "@/service/TransactionService";
import type { TransactionDto } from "@/types/TransactionDto";

export const createTransactionUseCase = async (data: TransactionDto) => {
    return TransactionService.create(data)
}
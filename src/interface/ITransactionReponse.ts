export interface TransactionResponse {
  id: number;
  description: string;
  type: string;
  amount: number;
  transaction_date: Date;
}

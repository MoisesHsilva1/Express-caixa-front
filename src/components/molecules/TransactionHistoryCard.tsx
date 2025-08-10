import { CardContent } from "../ui/card";

function TransactionHistoryCard({
  cashDescription,
  cashValue,
  transactionDay,
  typeTransaction,
}: {
  cashDescription: string;
  cashValue: number;
  transactionDay: Date;
  typeTransaction: string;
}) {
  return (
    <>
      <CardContent className="flex flex-col gap-2">
        <div className="flex justify-between bg-gray-100 shadow-sm rounded-md w-full border-b border-gray-300 p-2">
          <p className="text-sm text-gray-400">
            {transactionDay.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
            })}
          </p>
          <p className="text-sm text-gray-800 font-semibold">
            {cashDescription}
          </p>
          <p
            className={
              typeTransaction === "cashOut"
                ? "text-green-600 text-sm font-semibold"
                : "text-red-500 text-sm font-semibold"
            }
          >
            {cashValue.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </CardContent>
    </>
  );
}
export default TransactionHistoryCard;

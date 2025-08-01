import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GiBackwardTime } from "react-icons/gi";

function TransactionHistoryCard({
  cashDescription,
  cashValue,
  transactionDay,
}: {
  cashDescription: string;
  cashValue: number;
  transactionDay: string;
}) {
  return (
    <>
      <Card className="w-full lg:w-94">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">
            Histórico de Movimentações
          </CardTitle>
          <div className="-mx-4 mt-4 border-t border-gray-200"></div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {transactionDay.length ? (
            <div className="flex justify-between bg-gray-100 shadow-sm rounded-md w-full border-b border-gray-300 p-2">
              <p className="text-sm text-gray-400">{transactionDay}</p>
              <p className="text-sm text-gray-800 font-semibold">
                {cashDescription}
              </p>
              <p
                className={
                  cashValue >= 0
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
          ) : (
            <div className="flex justfiy-center items-center flex-col">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <GiBackwardTime size="26" color="gray" />
              </div>
              <p className="text-gray-500">Nenhuma movimentação registradas</p>
              <p className="text-sm text-gray-400 mt-1">
                Comece adicionando uma entrada ou saída
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
export default TransactionHistoryCard;

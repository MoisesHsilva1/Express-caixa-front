import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CashOverviewCardProps {
  totalTransactions?: number;
  cashInRegister?: number;
  cashOutRegister?: number;
  cashInTotal?: number;
  cashOutTotal?: number;
}

function CashOverviewCard({
  totalTransactions,
  cashInRegister,
  cashOutRegister,
  cashInTotal,
  cashOutTotal,
}: CashOverviewCardProps) {
  return (
    <Card className="w-full lg:w-200 gap-0">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800 mb-4 h-5">
          Resumo Geral
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row gap-4">
        <div className="flex flex-col gap-3 w-full">
          <h1 className="font-medium text-gray-700">Estatísticas Gerais</h1>
          <div className="flex justify-between">
            <span className="space-y-2 text-sm text-gray-600">
              <p>Total de movimentações:</p>
              <p>Entradas registradas:</p>
              <p>Saídas registradas: </p>
            </span>
            <span className="text-sm space-y-2 font-semibold">
              <p className="text-black">{totalTransactions}</p>
              <p className="text-green-600">{cashInRegister}</p>
              <p className="text-red-500">{cashOutRegister}</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <h1 className="font-medium text-gray-700">Valores Totais</h1>
          <div className="flex justify-between">
            <span className="space-y-2 text-sm text-gray-600">
              <p>Total em entradas:</p>
              <p>Total em saídas:</p>
            </span>
            <span className="text-sm space-y-2 font-semibold">
              <p className="text-green-600">
                {cashInTotal?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p className="text-red-500">
                {cashOutTotal?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default CashOverviewCard;

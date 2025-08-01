import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface FinancialReportCardProps {
  period?: string;
  lastOperations?: string;
  cashIn?: number;
  cashOut?: number;
  colorBgIcon?: string;
  icon?: React.ReactNode;
  balance?: number;
}

function FinancialReportCard({
  period,
  lastOperations,
  cashIn,
  cashOut,
  colorBgIcon,
  icon,
  balance,
}: FinancialReportCardProps) {
  return (
    <>
      <Card className="w-full lg:w-64">
        <CardHeader className="flex justify-between h-10">
          <span className="flex flex-col">
            <CardTitle className="text-lg font-semibold text-gray-800">
              {period}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Últimas {lastOperations}
            </CardDescription>
          </span>
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorBgIcon}`}
          >
            {icon}
          </div>
        </CardHeader>
        <CardContent className="h-14">
          <div className="flex justify-between">
            <span className="space-y-2 text-sm text-gray-600">
              <p>Entradas:</p>
              <p>Saídas:</p>
            </span>
            <span className="space-y-2 text-sm font-semibold">
              <p className="text-green-600">
                {cashIn?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p className="text-red-500">
                {cashOut?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </span>
          </div>
          <div className="-mx-4 mt-4 border-t border-gray-200"></div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <h1 className="text-sm font-medium text-gray-700">Saldo:</h1>
          <p className="text-green-600">
            {balance?.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
export default FinancialReportCard;

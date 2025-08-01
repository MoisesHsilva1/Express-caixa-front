import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const CashValueCard = ({ cash }: { cash: number }) => {
  const isPositive = cash >= 0;

  return (
    <>
      <Card className="w-full lg:w-200 gap-0">
        <CardHeader className="gap-0">
          <CardTitle className="text-lg font-semibold text-gray-700 mb-2">
            Saldo Atual do Caixa
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <p
            className={
              isPositive
                ? `text-3xl font-bold text-green-600`
                : "text-3xl font-bold text-red-500"
            }
          >
            {cash.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <div
            className={
              isPositive
                ? `w-16 h-16 rounded-full flex items-center justify-center bg-green-100`
                : `w-16 h-16 rounded-full flex items-center justify-center bg-red-100`
            }
          >
            {isPositive ? (
              <FaArrowUp color="green" />
            ) : (
              <FaArrowDown color="red" />
            )}
          </div>
        </CardContent>
        <CardFooter>
          <div className="mt-4 pt-4 border-t border-gray-200 w-full">
            <p className="text-sm text-gray-600">
              {isPositive
                ? "Saldo positivo - Caixa em dia"
                : "Saldo negativo - Verificar entradas"}
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
export default CashValueCard;

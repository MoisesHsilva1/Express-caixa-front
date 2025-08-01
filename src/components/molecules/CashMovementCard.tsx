import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Controller, useFormContext } from "react-hook-form";

interface cashMovementCardProps {
  typeCashTransaction: string;
  onSubmitCashTransaction: () => void;
  setTypeCashTransaction: (transaction: "cashIn" | "cashOut") => void;
}

interface transactionForm {
  value: number;
  description: string;
}

function CashMovementCard({
  setTypeCashTransaction,
  typeCashTransaction,
  onSubmitCashTransaction,
}: cashMovementCardProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext<transactionForm>();

  return (
    <>
      <Card className="flex w-full lg:w-100 gap-4">
        <CardHeader className="gap-0">
          <CardTitle className="text-lg font-semibold text-gray-800">
            Nova Movimentação
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-col w-full">
            <p className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Movimentação
            </p>
            <span className="flex flex-row gap-1">
              <Button
                onClick={() => setTypeCashTransaction("cashIn")}
                className={
                  typeCashTransaction === "cashIn"
                    ? "py-5 rounded-full flex-1 whitespace-nowrap cursor-pointer transition-colors bg-green-600 text-white hover:text-white hover:bg-green-500"
                    : "py-5 rounded-full flex-1 whitespace-nowrap cursor-pointer transition-colors bg-gray-100 text-gray-600 hover:text-white hover:bg-green-500"
                }
              >
                + Entrada
              </Button>
              <Button
                onClick={() => setTypeCashTransaction("cashOut")}
                className={
                  typeCashTransaction === "cashOut"
                    ? "py-5 rounded-full flex-1 whitespace-nowrap cursor-pointer transition-colors bg-red-500 text-white hover:text-white hover:bg-red-400"
                    : "py-5 rounded-full flex-1 whitespace-nowrap cursor-pointer transition-colors bg-gray-100 text-gray-600  hover:text-white hover:bg-red-400"
                }
              >
                - Saída
              </Button>
            </span>
          </div>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmitCashTransaction)}
          >
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Valor (R$)
            </Label>
            <Controller
              name="value"
              control={control}
              rules={{
                required: "Informe um valor.",
                min: {
                  value: 0.01,
                  message: "O valor deve ser maior que zero.",
                },
                validate: (value) =>
                  isNaN(value)
                    ? "Insira um número válido."
                    : value.toString().length <= 10 || "Máximo 10 caracteres.",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  inputMode="decimal"
                  step="0.01"
                  placeholder="Ex: R$ 14,00"
                  value={field.value ?? ""}
                  onInput={(e) => {
                    const input = e.currentTarget;
                    if (input.value.length > 10)
                      input.value = input.value.slice(0, 10);
                  }}
                />
              )}
            />
            {errors.value && (
              <p className="text-red-500 text-sm">{errors.value.message}</p>
            )}
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição
            </Label>
            <Controller
              name="description"
              control={control}
              rules={{
                required: "É preciso preencher uma descrição.",
                minLength: {
                  value: 3,
                  message: "A descrição deve ter pelo menos 3 caracteres.",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  maxLength={50}
                  placeholder="Descreva o que foi esse valor"
                />
              )}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
            <Button
              type="submit"
              className="w-full bg-green-600 mt-2 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer transition-colors"
            >
              Registrar Movimentação
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
export default CashMovementCard;

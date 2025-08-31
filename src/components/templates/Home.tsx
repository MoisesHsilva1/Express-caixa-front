import { useState } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { Button } from "../ui/button";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { IoToday } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import CashValueCard from "../molecules/CashValueCard";
import CashMovementCard from "../molecules/CashMovementCard";
import TransactionHistoryCard from "../molecules/TransactionHistoryCard";
import CashOverviewCard from "../molecules/CashOverviewCard";
import FinancialReportCard from "../molecules/FinancialReportCard";
import { useCreateTransaction } from "@/hooks/useCreateTransaction";
import { useTransaction } from "@/hooks/useTransaction";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { GiBackwardTime } from "react-icons/gi";
import { useTransactionReportByType } from "@/hooks/useTransactionReport";

function Home() {
  const [activeTab, setActiveTab] = useState<"movements" | "reports">(
    "movements"
  );
  const [typeCashTransaction, setTypeCashTransaction] = useState<
    "cashIn" | "cashOut"
  >("cashIn");

  const { mutate: createTransaction } = useCreateTransaction();
  useTransaction();
  const { data: transactions } = useTransaction();
  
  const { data: transactionReport } = useTransactionReportByType("balance");

  const methods = useForm();

  const valueCash = useWatch({
    control: methods.control,
    name: "value",
  });

  const descriptionCashTransaction = useWatch({
    control: methods.control,
    name: "description",
  });

  const onSubmitCashTransaction = () => {
    const data = {
      amount: Number(valueCash),
      type: typeCashTransaction,
      description: descriptionCashTransaction,
    };

    createTransaction(data);
    window.location.reload();
  };

  return (
    <FormProvider {...methods}>
      <main className="bg-neutral-100 flex items-center justify-center px-4 sm:px-6 lg:px-67 py-10">
        <section className="flex gap-6 flex-col sm:flex-wrap lg:flex-wrap w-full max-w-7xl">
          <CashValueCard
            cash={
              typeof transactionReport === "number"
                ? transactionReport
                : transactionReport?.report ?? 0
            }
          />
          <div className="flex flex-row gap-2">
            <Button
              onClick={() => setActiveTab("movements")}
              className={
                activeTab === "movements"
                  ? "px-6 py-6 rounded-full whitespace-nowrap cursor-pointer transition-colors bg-green-600 text-white hover:text-white hover:bg-green-600"
                  : "px-6 py-6 rounded-full whitespace-nowrap cursor-pointer transition-colors bg-white text-gray-600 hover:text-white hover:bg-green-600"
              }
            >
              Movimentações
            </Button>
            <Button
              onClick={() => setActiveTab("reports")}
              className={
                activeTab === "reports"
                  ? "px-6 py-6 rounded-full whitespace-nowrap cursor-pointer transition-colors bg-green-600 text-white hover:text-white hover:bg-green-600"
                  : "px-6 py-6 rounded-full whitespace-nowrap cursor-pointer transition-colors bg-white text-gray-600 hover:text-white hover:bg-green-600"
              }
            >
              Relatórios
            </Button>
          </div>

          {activeTab === "movements" && (
            <div className="flex flex-wrap gap-6 w-full lg:w-200">
              <CashMovementCard
                typeCashTransaction={typeCashTransaction}
                setTypeCashTransaction={setTypeCashTransaction}
                onSubmitCashTransaction={methods.handleSubmit(
                  onSubmitCashTransaction
                )}
              />
              <Card className="w-full lg:w-94">
                <CardHeader>
                  <CardTitle className="text-lg text-center font-semibold text-gray-800">
                    Histórico de Movimentações
                  </CardTitle>
                  <div className="-mx-4 mt-4 border-t border-gray-200"></div>
                </CardHeader>
                {transactions?.slice(0, 4).map((t) => (
                  <TransactionHistoryCard
                    typeTransaction={t.type}
                    cashDescription={t.description}
                    cashValue={t.amount}
                    transactionDay={new Date(t.transaction_date)}
                  />
                ))}
                {transactions?.length === 0 && (
                  <div className="flex justfiy-center items-center flex-col">
                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <GiBackwardTime size="26" color="gray" />
                    </div>
                    <p className="text-gray-500">
                      Nenhuma movimentação registradas
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Comece adicionando uma entrada ou saída
                    </p>
                  </div>
                )}
              </Card>
            </div>
          )}
          {activeTab === "reports" && (
            <div className="space-y-5">
              <h1 className="text-xl font-semibold text-gray-800">
                Relatórios Financeiros
              </h1>
              <div className="flex flex-wrap gap-4">
                <FinancialReportCard
                  cashIn={0}
                  cashOut={0}
                  colorBgIcon="bg-blue-500"
                  icon={<IoToday color="white" />}
                  period="Hoje"
                  balance={0}
                  lastOperations="24 horas"
                />
                <FinancialReportCard
                  cashIn={0}
                  cashOut={0}
                  period="Esta Semana"
                  icon={<BsCalendar2WeekFill color="white" />}
                  colorBgIcon="bg-blue-500"
                  balance={0}
                  lastOperations="24 horas"
                />
                <FinancialReportCard
                  period="Este Mês"
                  cashIn={0}
                  cashOut={0}
                  colorBgIcon="bg-blue-500"
                  lastOperations="24 horas"
                  balance={0}
                  icon={<FaCalendar color="white" />}
                />
                <CashOverviewCard
                  cashInRegister={0}
                  cashOutRegister={0}
                  cashInTotal={0}
                  cashOutTotal={0}
                  totalTransactions={0}
                />
              </div>
            </div>
          )}
        </section>
      </main>
    </FormProvider>
  );
}

export default Home;

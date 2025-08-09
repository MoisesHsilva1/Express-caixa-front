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

function Home() {
  const [activeTab, setActiveTab] = useState<"movements" | "reports">(
    "movements"
  );
  const [typeCashTransaction, setTypeCashTransaction] = useState<
    "cashIn" | "cashOut"
  >("cashIn");

  const { mutate: createTransaction } = useCreateTransaction();
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
      amount: valueCash,
      type: typeCashTransaction,
      description: descriptionCashTransaction,
    };

    createTransaction(data);
  };

  return (
    <FormProvider {...methods}>
      <main className="bg-neutral-100 flex items-center justify-center px-4 sm:px-6 lg:px-67 py-10">
        <section className="flex gap-6 flex-col sm:flex-wrap lg:flex-wrap w-full max-w-7xl">
          <CashValueCard cash={0} />
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
              <TransactionHistoryCard
                cashDescription={"sadsadsad"}
                cashValue={0}
                transactionDay={"04/10"}
              />
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

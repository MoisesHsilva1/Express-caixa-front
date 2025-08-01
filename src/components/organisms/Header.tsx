import { HiOutlineCurrencyDollar } from "react-icons/hi2";

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 lg:px-59 py-4 gap-y-4">
        <div className="flex items-center gap-4">
          <span className="flex justify-center items-center w-12 h-12 bg-green-600 rounded-lg shadow-sm">
            <HiOutlineCurrencyDollar color="white" size={24} />
          </span>
          <div>
            <h1 className="font-bold text-lg sm:text-xl">
              Controle de Caixa Express
            </h1>
            <p className="text-sm text-gray-600">
              Gestão simples e rápida do seu caixa
            </p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-base font-semibold text-gray-700">Hoje</h2>
          <p className="text-sm font-medium text-gray-900">
            {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;

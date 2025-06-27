import Card from '../components/ui/Card';
import PieChart from '../components/charts/PieGrafic';
import { TableHistoryPortfoli } from '../components/tableHistoryCripto/TableHistoryPortfoli';

export const Portafolio = () => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 m-2 sm:m-5 rounded-md w-full max-w-7xl mx-auto">
      
      {/* Tarjeta resumen */}
      <section>
        <Card />
      </section>

      {/* Gráfico circular */}
      <section className="bg-base-200 rounded-md p-4 w-full flex justify-center overflow-x-auto">
        <div className="w-full max-w-md">
          <PieChart />
        </div>
      </section>

      {/* Tabla de historial */}
      <section className="bg-base-200 rounded-md p-4 overflow-x-auto">
        <TableHistoryPortfoli />
      </section>

    </div>
  );
};

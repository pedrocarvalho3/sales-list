import SalesList from '../commons/SalesList';

export default function HomeTemplate() {
  return (
    <div className="w-full">
      <h1 className="mb-8 text-4xl font-bold">Lista de Vendas</h1>
      <SalesList />
    </div>
  );
}

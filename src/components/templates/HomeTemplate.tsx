import SalesList from '../commons/SalesList';

export default function HomeTemplate() {
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 py-4 text-4xl font-bold">Lista de Vendas</h1>

      <SalesList />
    </div>
  );
}

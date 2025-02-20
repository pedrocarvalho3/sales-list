import { create } from 'zustand';

interface Sale {
  id: number;
  name: string;
  amount: number;
}

interface SalesStore {
  sales: Sale[];
  addSale: (name: string, amount: number) => void;
  updateSale: (updatedSale: Sale) => void;
  deleteSale: (id: number) => void;
}

const useSalesStore = create<SalesStore>(set => ({
  sales: [
    { id: 1, name: 'Pen-drive', amount: 100.0 },
    { id: 2, name: 'Iphone 15 PRO MAX', amount: 7500.5 },
    { id: 3, name: 'Notebook Samsung', amount: 3600.0 },
  ],
  addSale: (name, amount) =>
    set(state => {
      const maxId =
        state.sales.length > 0 ? Math.max(...state.sales.map(s => s.id)) : 0;
      const newSale: Sale = { id: maxId + 1, name, amount };
      return { sales: [...state.sales, newSale] };
    }),
  updateSale: updatedSale =>
    set(state => ({
      sales: state.sales.map(sale =>
        sale.id === updatedSale.id ? updatedSale : sale,
      ),
    })),
  deleteSale: id =>
    set(state => ({ sales: state.sales.filter(sale => sale.id !== id) })),
}));

export default useSalesStore;

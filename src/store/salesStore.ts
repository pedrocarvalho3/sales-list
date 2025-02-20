import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

interface Sale {
  id: string;
  name: string;
  amount: number;
}

interface SalesStore {
  sales: Sale[];
  addSale: (name: string, amount: number) => void;
  updateSale: (updatedSale: Sale) => void;
  deleteSale: (id: string) => void;
}

const useSalesStore = create<SalesStore>(set => ({
  sales: [
    { id: uuidv4(), name: 'Pen-drive', amount: 100.0 },
    { id: uuidv4(), name: 'Iphone 15 PRO MAX', amount: 7500.5 },
    { id: uuidv4(), name: 'Notebook Samsung', amount: 3600.0 },
  ],
  addSale: (name, amount) =>
    set(state => {
      const newSale: Sale = { id: uuidv4(), name, amount };
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

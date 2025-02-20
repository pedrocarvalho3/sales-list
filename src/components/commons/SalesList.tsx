'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

interface Sale {
  id: number;
  name: string;
  amount: number;
}

const initialSales: Sale[] = [
  { id: 1, name: 'Jose', amount: 100.0 },
  { id: 2, name: 'Tiago', amount: 150.5 },
  { id: 3, name: 'Antonio', amount: 75.25 },
];

export default function SalesList() {
  const [sales, setSales] = useState<Sale[]>(initialSales);

  const handleDelete = (id: number) => {
    setSales(sales.filter(sale => sale.id !== id));
  };

  return (
    <div>
      <div className="mb-4">
        <Button
          onClick={() => console.log('Delete product:')}
          className="bg-teal-500 transition-all duration-200 hover:bg-teal-400"
        >
          <Plus className="h-4 w-4" />
          Novo
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-full border border-gray-200 bg-white text-lg">
          <TableHeader>
            <TableRow className="bg-teal-100">
              <TableHead className="border-b px-4 py-2">Nome</TableHead>
              <TableHead className="border-b px-4 py-2">Valor</TableHead>
              <TableHead className="border-b px-4 py-2 text-right">
                Ações
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sales.map(sale => (
              <TableRow key={sale.id} className="hover:bg-gray-50">
                <TableCell className="border-b px-4 py-2">
                  {sale.name}
                </TableCell>
                <TableCell className="border-b px-4 py-2">
                  {sale.amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </TableCell>
                <TableCell className="border-b px-4 py-2 text-right">
                  <Button
                    variant="outline"
                    size="icon"
                    className="mr-2 bg-teal-200"
                    onClick={() => console.log('Delete product:', sale.id)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-red-200"
                    onClick={() => handleDelete(sale.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

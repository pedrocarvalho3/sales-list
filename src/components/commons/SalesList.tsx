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
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import useSalesStore from '@/store/salesStore';
import { SaleForm } from './SaleForm';
import { toast } from '@/hooks/use-toast';
import { Toaster } from '../ui/toaster';

interface Sale {
  id: string;
  name: string;
  amount: number;
}

export default function SalesList() {
  const { sales, deleteSale, updateSale } = useSalesStore();

  const [editingSale, setEditingSale] = useState<Sale | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleDelete = (id: string) => {
    deleteSale(id);
  };

  const handleEdit = (sale: Sale) => {
    setEditingSale(sale);
    setIsModalOpen(true);
  };

  const handleSave = (name: string, value: number) => {
    if (editingSale) {
      const updatedSale = {
        ...editingSale,
        name,
        amount: value,
      };
      toast({
        title: 'Sucesso!',
        description: 'Venda atualizada com sucesso!',
      });
      updateSale(updatedSale);
    }
    setIsModalOpen(false);
  };

  return (
    <main>
      <Toaster />
      <div className="mb-4">
        <Button
          onClick={() => router.push('/sales/new')}
          className="bg-teal-500 font-bold transition-all duration-200 hover:bg-teal-400"
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
                    className="mr-2 bg-yellow-100 hover:bg-yellow-200"
                    onClick={() => handleEdit(sale)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-red-200 hover:bg-red-300"
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
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogTitle className="text-xl">Editar Venda</DialogTitle>
          <SaleForm
            initialName={editingSale?.name}
            initialValue={editingSale?.amount}
            onSubmit={handleSave}
            isEditing
          />
        </DialogContent>
      </Dialog>
    </main>
  );
}

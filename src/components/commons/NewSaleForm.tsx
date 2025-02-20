'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useSalesStore from '@/store/salesStore';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { SaleForm } from './SaleForm';

export default function NewSaleForm() {
  const { addSale } = useSalesStore();
  const router = useRouter();

  const handleSubmit = (name: string, value: string) => {
    addSale(name, parseFloat(value));
    router.back();
  };

  return (
    <div className="container mx-auto max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="mb-2 text-center text-2xl">
            Adicionar nova Venda
          </CardTitle>
          <CardDescription>Insira os detalhes da nova venda</CardDescription>
        </CardHeader>
        <CardContent>
          <SaleForm onSubmit={handleSubmit} />
        </CardContent>
      </Card>

      <Button
        variant="link"
        size="icon"
        onClick={() => router.back()}
        className="text-md ml-4 mt-2 text-teal-500 transition-all duration-200 hover:text-teal-400"
      >
        <ArrowLeft className="h-8 w-8" />
        Voltar
      </Button>
    </div>
  );
}

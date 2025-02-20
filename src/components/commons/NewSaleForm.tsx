'use client';

import type React from 'react';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useSalesStore from '@/store/salesStore';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function NewSaleForm() {
  const { addSale } = useSalesStore();
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSale(name, parseFloat(value));
    setName('');
    setValue('');
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Insira o nome"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="value">Valor</Label>
              <Input
                id="value"
                type="number"
                placeholder="Insira o valor"
                value={value}
                onChange={e => setValue(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-teal-500 font-bold transition-all duration-200 hover:bg-teal-400"
            >
              Adicionar Venda
            </Button>
          </form>
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

'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface SaleFormProps {
  initialName?: string;
  initialValue?: string;
  onSubmit: (name: string, value: string) => void;
  isEditing?: boolean;
}

export function SaleForm({
  initialName = '',
  initialValue = '',
  onSubmit,
  isEditing = false,
}: SaleFormProps) {
  const [name, setName] = useState(initialName);
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, value);
  };

  return (
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
          value={value.toString()}
          onChange={e => setValue(e.target.value)}
          required
        />
      </div>
      <div className="flex gap-2">
        <Button
          type="submit"
          className="w-full bg-teal-500 font-bold transition-all duration-200 hover:bg-teal-400"
        >
          {isEditing ? 'Salvar' : 'Adicionar Venda'}
        </Button>
      </div>
    </form>
  );
}

'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2, { message: 'Nome é obrigatório' }),
  value: z
    .any()
    .transform(val => String(val).replace(',', '.'))
    .refine(val => val.trim() !== '', { message: 'Valor é obrigatório' })
    .transform(val => parseFloat(val))
    .refine(val => !isNaN(val) && val > 0, {
      message: 'O valor deve ser maior que 0',
    }),
});

interface SaleFormProps {
  initialName?: string;
  initialValue?: number;
  onSubmit: (name: string, value: number) => void;
  isEditing?: boolean;
}

export function SaleForm({
  initialName = '',
  initialValue = 0,
  onSubmit,
  isEditing = false,
}: SaleFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: initialName,
      value: initialValue,
    },
  });

  const onSubmitForm = (data: { name: string; value: number }) => {
    onSubmit(data.name, data.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" placeholder="Insira o nome" {...register('name')} />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="value">Valor</Label>
        <Input
          id="value"
          type="text"
          placeholder="Insira o valor"
          {...register('value')}
        />
        {errors.value && (
          <p className="text-sm text-red-500">{errors.value.message}</p>
        )}
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

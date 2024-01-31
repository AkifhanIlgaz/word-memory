import { generateError } from '@/lib/errors';
import { Input } from '@nextui-org/react';
import { Label } from '../label';

export default function TextInput({ register, errors, label, required }) {
  return (
    <div className="flex flex-col gap-1">
      <Label label={label.title} isRequired={required}></Label>
      <Input
        color="primary"
        type="text"
        placeholder={label.title}
        labelPlacement="outside"
        variant="bordered"
        errorMessage={
          errors[label.key] && generateError(label.key, errors[label.key])
        }
        {...register(label.key, {
          required: true,
        })}
      ></Input>
    </div>
  );
}

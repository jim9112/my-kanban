import { useState } from 'react';

interface IFormData {
  email?: string;
  password?: string;
  password2?: string;
  nickname?: string;
}

const useUpdateInput = () => {
  const [formData, setFormData] = useState<IFormData>({});

  const updateInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
    console.log(formData);
  };

  return { formData, updateInput };
};

export default useUpdateInput;

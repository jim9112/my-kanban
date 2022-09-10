import { useState } from 'react';

const useUpdateInput = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
    console.log(formData);
  };

  return { formData, updateInput };
};

export default useUpdateInput;

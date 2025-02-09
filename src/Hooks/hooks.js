import { useState } from "react";

export const useField = (type) => {
  const [value, setValue] = useState('');
  return {type, value,reset: () => setValue(''), onChange: (event) => setValue(event.target.value)};
}
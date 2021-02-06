import { ChangeEvent, useCallback, useState } from 'react';

function useInput() {
  const [value, setValue] = useState<string>('');

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, handleOnChange };
}

export default useInput;

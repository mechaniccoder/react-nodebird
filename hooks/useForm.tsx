import { useCallback, useState } from 'react';

const useForm = () => {
  const [state, setState] = useState({
    userId: '',
    nickname: '',
    password: '',
  });

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      setState((prevState) => ({ ...prevState, [name]: value }));
    },
    []
  );

  return { state, handleOnChange };
};

export default useForm;

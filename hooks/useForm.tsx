import { useCallback, useState } from 'react';

const useForm = () => {
  const [state, setState] = useState({
    userId: '',
    password: '',
  });

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      setState((prevState) => ({ ...prevState, [name]: value }));
    },
    []
  );

  const handleOnSubmit = useCallback(
    (event: React.MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
    },
    []
  );

  return { state, handleOnChange, handleOnSubmit };
};

export default useForm;

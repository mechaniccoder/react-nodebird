import { render, fireEvent } from '@testing-library/react';
import LoginForm from '@components/LoginForm';

describe('LoginForm', () => {
  it('change event in inputNode', () => {
    const { getByLabelText } = render(<LoginForm />);
    const inputNode = getByLabelText('아이디', {
      selector: 'input',
    });

    fireEvent.change(inputNode, {
      target: { value: 'test value' },
    });

    expect(inputNode).toHaveValue('test value');
  });
});

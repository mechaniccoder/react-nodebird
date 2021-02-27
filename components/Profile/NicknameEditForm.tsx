import { Form, Input } from 'antd';
import styled from 'styled-components';

export default function NicknameEditForm() {
  return (
    <FormWrapper>
      <Input.Search
        placeholder="input search text"
        addonBefore="닉네임변경"
        enterButton
      />
    </FormWrapper>
  );
}

const FormWrapper = styled(Form)``;

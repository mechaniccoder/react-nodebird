import { rootState } from '@store/reducer';
import { update_nickname_request } from '@store/user';
import { Form, Input } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export default function NicknameEditForm() {
  const [newNickname, setNewNickname] = useState('');
  const nickname = useSelector((state: rootState) => state.user.me?.nickname);
  const dispatch = useDispatch();

  const updateNickname = useCallback(() => {
    if (!nickname) return alert('로그인이 필요합니다.');
    dispatch({ type: update_nickname_request, payload: newNickname });
    setNewNickname('');
  }, [dispatch, newNickname]);

  return (
    <FormWrapper>
      <Input.Search
        placeholder="input search text"
        addonBefore="닉네임변경"
        enterButton
        value={newNickname}
        onSearch={updateNickname}
        onChange={(e) => setNewNickname(e.target.value)}
      />
    </FormWrapper>
  );
}

const FormWrapper = styled(Form)``;

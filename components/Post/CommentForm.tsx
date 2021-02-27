import { rootState } from '@store/reducer';
import { Button, Form, Input } from 'antd';
import useInput from 'hooks/useInput';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainPost } from 'type';

interface Props {
  post: MainPost;
}

function CommentForm({ post }: Props) {
  const {
    value: commentValue,
    handleOnChange: handleCommentChange,
  } = useInput();
  const { me } = useSelector((state: rootState) => state.user);
  const dispatch = useDispatch();

  const onSubmitComment = useCallback(() => {}, [commentValue]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ margin: 0 }}>
        <Input
          style={{ margin: '10px 0' }}
          onChange={handleCommentChange}
          value={commentValue}
        />
        <Button type="primary" htmlType="submit">
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CommentForm;

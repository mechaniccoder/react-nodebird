import { Button, Form, Input } from 'antd';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { rootState } from 'store/reducer';

export default function PostForm() {
  const [text, setText] = useState('');
  const onSubmit = useCallback(() => {}, []);
  const { imagePaths } = useSelector((state: rootState) => state.post);

  const onChangeText = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.currentTarget.value);
    },
    []
  );

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((path) => (
          <div key={path} style={{ display: 'inlin-block' }}>
            <img style={{ width: '200px' }} src={path} alt={path} />
          </div>
        ))}
      </div>
    </Form>
  );
}

import { Button, Form, Input } from 'antd';
import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from 'store/post';
import { rootState } from 'store/reducer';

export default function PostForm() {
  const [text, setText] = useState('');
  const imageInput = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const me = useSelector((state: rootState) => state.user.me);
  const { imagePaths } = useSelector((state: rootState) => state.post);

  const onSubmit = useCallback(() => {
    console.log('submit');
    if (!me?.id) return alert('로그인이 필요합니다.');
    dispatch(addPost({ content: text, userId: me.id }));
  }, [me, dispatch, addPost, text]);

  const onChangeText = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  }, []);

  const onClickImageInput = useCallback(() => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  }, []);

  return (
    <Form style={{ margin: '10px 0 20px' }} onFinish={onSubmit}>
      <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 일이 있었나요?" />
      <div style={{ marginTop: '6px' }}>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageInput}>이미지 업로드</Button>
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

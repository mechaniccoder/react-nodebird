import axios from 'axios';

export const addPostApi = (content: string, id: string | number): Promise<any> => {
  return axios.post('/post', {
    content,
    id,
  });
};

export const addCommentApi = (content: string, userId: string | number, postId: string | number): Promise<any> => {
  return axios.post(`/post/${postId}/comment`, {
    content,
    userId,
    postId,
  });
};

export const loadPostApi = () => {
  return axios.get('/post');
};

import { MainPost } from 'type';

export interface InitialPost {
  loading: boolean;
  mainPosts: MainPost[];
  imagePaths: string[];
  postAdded: boolean;
}

const initialPost: InitialPost = {
  loading: false,
  mainPosts: [
    {
      id: 1,
      User: {
        id: 4,
        nickname: '승환',
      },
      content: '첫 게시물 #nextJs #docker',
      Comments: [
        { id: 1, text: 'thank you', nickname: 'sanggyu' },
        { id: 2, text: 'Hello world~!', nickname: 'chanyoung' },
      ],
      Images: [
        {
          src:
            'https://images.unsplash.com/photo-1611651336487-802fe164d3e5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        },
        {
          src:
            'https://images.unsplash.com/photo-1611545815820-c1a58530d8d6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        },
        {
          src:
            'https://images.unsplash.com/photo-1611545815820-c1a58530d8d6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const dummyPost: MainPost = {
  id: 1,
  User: {
    id: 3,
    nickname: '상규',
  },
  content: '첫 게시물 #nextJs #docker',
  Comments: [],
  Images: [
    {
      src:
        'https://images.unsplash.com/photo-1611545815820-c1a58530d8d6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      src:
        'https://images.unsplash.com/photo-1611651336487-802fe164d3e5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
  ],
};

const ADD_POST_REQUEST = 'post/add_post_request';
const ADD_POST_SUCCESS = 'post/add_post_success';
const ADD_POST_FAILURE = 'post/add_post_failure';

export const addPost = (data: MainPost) => ({
  type: ADD_POST_REQUEST,
  payload: data,
});

export default function post(state = initialPost, action: any): InitialPost {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [action.payload, ...state.mainPosts],
        loading: false,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

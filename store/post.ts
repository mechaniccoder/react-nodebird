import { MainPost } from 'type';

export interface InitialPost {
  addPostloading: boolean;
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

export const ADD_POST_REQUEST = 'post/add_post_request';
export const ADD_POST_SUCCESS = 'post/add_post_success';
export const ADD_POST_FAILURE = 'post/add_post_failure';

export const addPost = (id: string, text: string) => ({
  type: ADD_POST_REQUEST,
  payload: { id, text },
});

export default function post(state = initialPost, action: any): InitialPost {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostloading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [action.payload, ...state.mainPosts],
        addPostloading: false,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostloading: false,
      };
    default:
      return state;
  }
}

interface MainPost {
  id: number;
  User: { id: number; nickname: string };
  content: string;
  Images: { src: string }[];
}

interface InitialPost {
  mainPosts: MainPost[];
  imagePaths: string[];
  postAdded: boolean;
}

const initialPost: InitialPost = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '승환',
      },
      content: '첫 게시물 #nextJs #docker',
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
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const dummyPost: MainPost = {};

export const addPost = {
  type: 'ADD_POST',
};

export default function post(state = initialPost, action: any): InitialPost {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    default:
      return state;
  }
  return state;
}
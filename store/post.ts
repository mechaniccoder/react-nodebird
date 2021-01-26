interface InitialPost {
  text: string;
}

const initialPost: InitialPost = {
  text: '',
};

export default function post(state = initialPost, action: any) {
  return state;
}

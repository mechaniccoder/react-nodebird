import { FC } from 'react';
import { MainPost } from 'type';

interface Props {
  post: MainPost;
}

const PostCard: FC<Props> = ({ post }) => {
  return <div>PostCard</div>;
};

export default PostCard;

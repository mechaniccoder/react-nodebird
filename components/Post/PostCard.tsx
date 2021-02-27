import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Card, Comment, List, Popover } from 'antd';
import { FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { rootState } from 'store/reducer';
import { MainPost } from 'type';
import CommentForm from './CommentForm';
import PostImages from './PostImages';

interface Props {
  post: MainPost;
}

const PostCard: FC<Props> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormVisible, setCommentFormVisible] = useState(false);
  const id = useSelector((state: rootState) => state.user.me?.id);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleCommentForm = useCallback(() => {
    setCommentFormVisible((prev) => !prev);
  }, []);

  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              key="heart"
              twoToneColor="#eb2f96"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="message" onClick={onToggleCommentForm} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button danger>삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commentFormVisible && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글이 있습니다.`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  content={item.text}
                  author={item.nickname}
                  avatar={<Avatar>{item.nickname[0]}</Avatar>}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default PostCard;

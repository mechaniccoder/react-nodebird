import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { likePost, unlikePost } from '@store/post';
import { Avatar, Button, Card, Comment, List, Popover } from 'antd';
import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'store/reducer';
import { MainPost } from 'type';
import CommentForm from './CommentForm';
import PostImages from './PostImages';

interface Props {
  post: MainPost;
}

const PostCard: FC<Props> = ({ post }) => {
  const [commentFormVisible, setCommentFormVisible] = useState(false);
  const dispatch = useDispatch();
  const myId = useSelector((state: rootState) => state.user.me?.id);
  const isLike = post.LikeUsers.some((user) => user.id === myId);

  const likeOnClick = useCallback(() => {
    dispatch(likePost(post.id));
  }, [dispatch, post.id, likePost]);

  const unlikeOnClick = useCallback(() => {
    dispatch(unlikePost(post.id));
  }, [dispatch, post.id, likePost]);

  const onToggleCommentForm = useCallback(() => {
    setCommentFormVisible((prev) => !prev);
  }, []);

  return (
    <div>
      <Card
        cover={post.Images?.[0] ? <PostImages images={post.Images} /> : ''}
        actions={[
          <RetweetOutlined key="retweet" />,
          isLike ? (
            <HeartTwoTone key="heart" twoToneColor="#eb2f96" onClick={unlikeOnClick} />
          ) : (
            <HeartOutlined key="heart" onClick={likeOnClick} />
          ),
          <MessageOutlined key="message" onClick={onToggleCommentForm} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {myId && post.User.id === myId ? (
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
            header={`${post.Comments?.length || 0}개의 댓글이 있습니다.`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  content={item.content}
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
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

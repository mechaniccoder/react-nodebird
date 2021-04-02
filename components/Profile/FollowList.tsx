import { Button, Card, List } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';
import { StopOutlined } from '@ant-design/icons';

interface DataItem {
  nickname: string;
}

interface Props {
  title: string;
  data: DataItem[];
}

const FollowList: FC<Props> = ({ title, data }) => {
  return (
    <ListWrapper
      size="small"
      grid={{ gutter: 4, column: 3 }}
      header={<div>{title}</div>}
      bordered
      loadMore={
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <Button>더보기</Button>
        </div>
      }
      dataSource={data}
      renderItem={(item: any, index: number) => (
        <List.Item>
          <Card actions={[<StopOutlined />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default FollowList;

const ListWrapper = styled(List)`
  margin-top: 15px;
`;

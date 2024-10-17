import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/store';
import { List, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getUsers, removeUser } from '../store/userSlice';
import { RootState } from '../store/store';

interface UserListProps {
  setEditingUser: (user: any) => void;
}

const UserList: React.FC<UserListProps> = ({ setEditingUser }) => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
      renderItem={user => (
        <List.Item
          actions={[
            <Button icon={<EditOutlined />} onClick={() => setEditingUser(user)} />,
            <Button icon={<DeleteOutlined />} onClick={() => dispatch(removeUser(user.id))} />,
          ]}
        >
          <List.Item.Meta
            title={`${user.name} ${user.lastname}`}
            description={`Born: ${user.born}`}
          />
        </List.Item>
      )}
    />
  );
};

export default UserList;
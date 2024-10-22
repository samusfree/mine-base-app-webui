import React, { useState } from "react";
import { Provider } from "react-redux";
import { Layout, Typography } from "antd";
import store from "../store/store";
import { User } from "../models/user";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

const { Header, Content } = Layout;
const { Title } = Typography;

const Users: React.FC = () => {
  const [editingUser, setEditingUser] = useState<User | null>(null);

  return (
    <Provider store={store}>
      <Layout>
        <Header>
          <Title style={{ color: "white" }}>User CRUD</Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <UserForm
            editingUser={editingUser}
            setEditingUser={(user) => setEditingUser(user)}
          />
          <UserList setEditingUser={setEditingUser} />
        </Content>
      </Layout>
    </Provider>
  );
};

export default Users;

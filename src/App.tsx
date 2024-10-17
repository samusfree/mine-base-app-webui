import React, { useState } from "react";
import { Provider } from "react-redux";
import { Layout, Typography } from "antd";
import { UserForm, UserList } from "./users";
import store from "./users/store/store";
import { User } from "./users/models/user";

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
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

export default App;

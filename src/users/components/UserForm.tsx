import React, { useEffect } from "react";
import { useDispatch } from "react-redux"; // Adjust the import path as necessary
import { Button, Form, Input, DatePicker } from "antd";
import { addUser, editUser } from "../store/userSlice";
import dayjs from "dayjs";
import { User } from "../models/user";
import { AppDispatch } from "../store/store";

interface UserFormProps {
  setEditingUser: (user: User | null) => void;
  editingUser: User | null;
}

const UserForm: React.FC<UserFormProps> = ({ setEditingUser, editingUser }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingUser) {
      form.setFieldsValue({
        ...editingUser,
        born: dayjs(editingUser.born),
      });
    } else {
      form.resetFields();
    }
  }, [editingUser, form]);

  const onFinish = (values: any) => {
    const user: User = {
      ...values,
      born: dayjs(values.born).format("YYYY-MM-DD"),
    };
    if (editingUser) {
      dispatch(editUser({ id: editingUser.id, user: user }));
      setEditingUser(null);
    } else {
      dispatch(addUser(user));
    }
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="lastname" label="Lastname" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="born" label="Born" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {editingUser ? "Update" : "Add"} User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;

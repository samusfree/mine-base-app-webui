import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUserService } from "../services/IUserService";
import container from "../di/container";
import { User, UserState } from "../models/user";

const userService = container.get<IUserService>("IUserService");

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return await userService.fetchUsers();
});

export const addUser = createAsyncThunk("users/addUser", async (user: User) => {
  return await userService.createUser(user);
});

export const editUser = createAsyncThunk(
  "users/editUser",
  async ({ id, user }: { id: string; user: User }) => {
    return await userService.updateUser(id, user);
  }
);

export const removeUser = createAsyncThunk(
  "users/removeUser",
  async (id: string) => {
    await userService.deleteUser(id);
    return id;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;

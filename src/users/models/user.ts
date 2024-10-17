export interface User {
  id: string;
  name: string;
  lastname: string;
  born: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

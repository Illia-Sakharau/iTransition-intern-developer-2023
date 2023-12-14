import { useAppSelector } from "./redux";

export function useAuth() {
  const {email, token, name} = useAppSelector(state=>state.currentUserSlice);

  return {
    isAuth: !!token,
    email,
    name
  }
}
import { useAppSelector } from "./redux";

export function useAuth() {
  const {email, token} = useAppSelector(state=>state.currentUserSlice);

  return {
    isAuth: !!token,
    email
  }
}
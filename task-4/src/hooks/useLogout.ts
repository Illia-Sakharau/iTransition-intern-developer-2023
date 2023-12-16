import { useNavigate } from "react-router-dom";
import { currentUserSlice } from "../store/reducers/currentUserSlice";
import { useAppDispatch } from "./redux";
import { NavRoutes } from "../types/routes";

export function useLogout() {
  const dispath = useAppDispatch();
  const { removeCurentUser } = currentUserSlice.actions;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    dispath(removeCurentUser());
    navigate(NavRoutes.login);
  }

  return {logout};
}
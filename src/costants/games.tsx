import { ReactElement, ReactNode } from "react";
import T3Page from "../pages/T3Page";
import RPSPage from "../pages/RPSPage";
import { RPSIcon, T3Icon } from "../components/1-atoms/Icons";
import { IconProps } from "@chakra-ui/react";

export type gameInfo = {
  id: string;
  title: string;
  icon: (props?: IconProps) => ReactElement;
  page: ReactNode;
}

export const GAMES_INGO: gameInfo[] = [
  {
    id: 'T3',
    title: 'Tik Tak Toe',
    icon: (props) => <T3Icon {...props}/>,
    page: <T3Page />,
  },
  {
    id: 'RPS',
    title: 'Rock Paper Scissors',
    icon: (props) => <RPSIcon {...props}/>,
    page: <RPSPage />,
  }
]
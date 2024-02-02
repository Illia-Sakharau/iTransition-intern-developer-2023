import { useOutletContext } from "react-router-dom";
import RoomsSection from "../components/3-organisms/roomsSection/RoomsSection";
import { ContextType } from "../components/4-layouts/GameLayout";

const RPSPage = () => {
  const { rooms } = useOutletContext<ContextType>();
  
  return (
    <RoomsSection rooms={rooms} />
  );
};

export default RPSPage;

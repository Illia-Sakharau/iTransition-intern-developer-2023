import RoomsSection from "../components/3-organisms/roomsSection/RoomsSection";
import { useOutletContext } from "react-router-dom";
import { ContextType } from "../components/4-layouts/GameLayout";


const T3Page = () => {
  const { rooms, joinRoom } = useOutletContext<ContextType>();
  
  return (
    <RoomsSection rooms={rooms} joinRoom={joinRoom} />
  );
};

export default T3Page;

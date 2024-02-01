import RoomsSection from "../components/3-organisms/roomsSection/RoomsSection";
import { roomsInfo } from "../types/rooms";

const RPSPage = () => {
  const ROOMS: roomsInfo[] = []
  
  return (
    <RoomsSection rooms={ROOMS} />
  );
};

export default RPSPage;

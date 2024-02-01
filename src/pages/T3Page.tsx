import RoomsSection from "../components/3-organisms/roomsSection/RoomsSection";
import { roomsInfo } from "../types/rooms";

const T3Page = () => {
  const ROOMS: roomsInfo[] = [
    {
      id: '2123546',
      owner: 'Anonimus'
    },
    {
      id: '1546523',
      owner: 'Alex'
    },
  ]
  
  return (
    <RoomsSection rooms={ROOMS} />
  );
};

export default T3Page;

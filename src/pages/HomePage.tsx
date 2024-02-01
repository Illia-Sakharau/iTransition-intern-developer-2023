import { Center } from "@chakra-ui/react";
import NameSection from "../components/3-organisms/NameSection";
import GamesSection from "../components/3-organisms/gamesSection/GamesSection";

const HomePage = () => {
  return (
    <Center
      minH={'100vh'}
      flexDirection={'column'}
      gap={8}
    >
      <NameSection />
      <GamesSection />
    </Center>
  );
};

export default HomePage

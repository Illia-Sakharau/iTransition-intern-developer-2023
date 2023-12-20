import { FC } from "react";
import { Container, Stack } from "react-bootstrap";
import RegionInput from "./components/RegionInput";
import SeedInput from "./components/SeedInput";
import ErrorsInput from "./components/ErrorsInput";

const ToolsBar: FC = () => {

  return (
    <div className="sticky-top bg-black py-3">
      <Container >
        <Stack direction="horizontal" gap={4}>
          <RegionInput />
          <ErrorsInput />
          <SeedInput />
        </Stack>
      </Container>
    </div>
  );
};

export default ToolsBar;

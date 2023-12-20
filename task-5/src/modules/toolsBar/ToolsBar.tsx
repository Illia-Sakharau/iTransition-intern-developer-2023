import { FC } from "react";
import { Container, Stack } from "react-bootstrap";
import RegionInput from "./components/RegionInput";

const ToolsBar: FC = () => {

  return (
    <div className="sticky-top bg-black py-3">
      <Container >
        <Stack direction="horizontal" gap={3}>
          <RegionInput />
        </Stack>
      </Container>
    </div>
  );
};

export default ToolsBar;

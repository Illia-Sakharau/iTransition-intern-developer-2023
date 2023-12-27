import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import { CustomMenu } from '../components/customMenu'

export const Space = () => {

  return (
    <>
      <div style={{ height: "calc(100vh)" }}>
        <Excalidraw>
          <CustomMenu />
        </Excalidraw>
      </div>
    </>
  );

};

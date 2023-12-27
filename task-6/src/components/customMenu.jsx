import { MainMenu } from "@excalidraw/excalidraw";
import { useNavigate } from "react-router-dom";

export const CustomMenu = ({ space }) => {
  const navigate = useNavigate();

  return (
    <>
    <MainMenu>
      <MainMenu.Item onSelect={() => navigate('/')}>
        All Spaces
      </MainMenu.Item>
      <MainMenu.DefaultItems.SaveAsImage />
    </MainMenu>
    </>
  )
}

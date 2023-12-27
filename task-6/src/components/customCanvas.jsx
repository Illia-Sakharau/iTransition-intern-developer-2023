import { Excalidraw } from "@excalidraw/excalidraw";
import { CustomMenu } from '../components/customMenu'
import { useState } from "react";
import useDebounce from '../hooks/useDebounce'
import { useCallbackRefState } from "../hooks/useCallbackRefState";
import { writeChanges, setListner } from '../firebase'

export const CustomCanvas = ({id}) => {
  const [currentElements, setCurrentElements] = useState(null);  
  const [excalidrawAPI, excalidrawRefCallback] = useCallbackRefState();
  
  const handle = (elements) => {
    if (elements.length !== 0 && JSON.stringify(elements) !== JSON.stringify(currentElements)) {
      setCurrentElements(elements.map(shape=>Object.assign({},shape)))
      writeChanges(id, JSON.stringify(elements))
    }
  }

  const onDatabaseChange = (value) => {
    if (value && value !== JSON.stringify(currentElements)) {
      setCurrentElements(JSON.parse(value))
      excalidrawAPI.updateScene({elements: JSON.parse(value)});
    }
  }

  const changeHandler = useDebounce(handle, 30)
  setListner(id, onDatabaseChange)

  return (
    <div style={{ height: "calc(100vh)" }}>
      <Excalidraw
        excalidrawAPI={excalidrawRefCallback}
        onChange={changeHandler}
      >
        <CustomMenu />
      </Excalidraw>
    </div>
  );

};

import React from 'react'
import { useParams } from 'react-router-dom';
// import { Excalidraw } from "@excalidraw/excalidraw";

export const Space = () => {
  const {id} = useParams();
  //   const [ currentElements, setCurrentElements ] = useState();
  
  //   const onChange = (
  //     elements,
  //     appState,
  //     files,
  //   ) => {
  //     if (JSON.stringify(currentElements) !== JSON.stringify(appState)) {
  //       console.log(state, ' ---appState ------------');
  //       console.log(appState);
  //       console.log('APP_STATE ------------');
  //       console.log(appState);
  //       console.log('FILES -------------');
  //       console.log(files);
  
  //       setCurrentElements(appState)
  //       state = state + 1
  //     }
      
  //   };
  
  //   return (
  //     <div style={{ height: "calc(100vh - 100px)" }}>
  //       <Excalidraw
  //         onChange={onChange}
  //         initialData={{
  //           elements: [],
  //           appState: [],
  //           files: []
  //         }}
  //       ></Excalidraw>
  //     </div>
  //   );

  return (
    <>
      <h1>SPACE {id}</h1>
    </>
  )
};

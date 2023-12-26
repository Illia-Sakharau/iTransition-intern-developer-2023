import { Excalidraw, LiveCollaborationTrigger } from "@excalidraw/excalidraw";
import { useState } from 'react';

function App() {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [isCollaborating, setIsCollaborating] = useState(false);
  return (
    <div style={{ height: "500px" }}>
      <p style={{ fontSize: "16px" }}>
        Selecting the checkbox to see the collaborator count
      </p>
      <label style={{ fontSize: "16px", fontWeight: "bold" }}>
        <input
          type="checkbox"
          checked={isCollaborating}
          onChange={() => {
            if (!isCollaborating) {
              const collaborators = new Map();
              collaborators.set("id1", {
                username: "Doremon",
                avatarUrl: "../../../../img/doremon.png",
              });
              collaborators.set("id3", {
                username: "Pika",
                avatarUrl: "../../../../img/pika.jpeg",
              });
              excalidrawAPI.updateScene({ collaborators });
            } else {
              excalidrawAPI.updateScene({
                collaborators: new Map(),
              });
            }
            setIsCollaborating(!isCollaborating);
          }}
        />
        Show Collaborators
      </label>
      <Excalidraw
        ref={(api) => setExcalidrawAPI(api)}
        renderTopRightUI={() => (
          <LiveCollaborationTrigger
            isCollaborating={isCollaborating}
            onSelect={() => {
              window.alert("You clicked on collab button");
              setIsCollaborating(true);
            }}
          />
        )}
      ></Excalidraw>
    </div>
  );
}

export default App

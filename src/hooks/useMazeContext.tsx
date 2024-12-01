import { MazeContext } from "@/store/maze";
import { useContext } from "react";

function useMazeContext() {
  const context = useContext(MazeContext);

  if (!context) {
    throw new Error("useMazeContext must be used within a MazeProvider");
  }

  return context;
}

export default useMazeContext

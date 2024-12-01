import React from "react";
import useMaze from "@/hooks/useMaze";

import "@/styles/globals.css";
import useMazeWebsocket from "./hooks/useMazeWebsocket";

const Maze: React.FC = () => {
  const { canvasRef } = useMaze();
  useMazeWebsocket();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <canvas ref={canvasRef} className="border-2 border-gray-500" />
    </div>
  );
};

export default Maze;

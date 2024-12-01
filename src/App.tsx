import React from "react";
import useMaze from "@/hooks/useMaze";

import "@/globals.css";

const MazeCanvas: React.FC = () => {
  const { canvasRef } = useMaze();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <canvas ref={canvasRef} className="border-2 border-gray-500" />
    </div>
  );
};

export default MazeCanvas;

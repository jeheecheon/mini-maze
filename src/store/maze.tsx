import { exampleGrid } from "@/utils/maze";
import { createContext, useState } from "react";

type MazeInfo = {
  grid: number[][];
  isDone: boolean;
};

const initialMazeInfo: MazeInfo = {
  grid: exampleGrid,
  isDone: false,
};

type MazeContextValue = {
  mazeInfo: MazeInfo;
  setMazeInfo: React.Dispatch<React.SetStateAction<MazeInfo>>;
};

const MazeContext = createContext<MazeContextValue | null>(null);

type MazeProviderProps = {
  children: React.ReactNode;
};

function MazeProvider(props: MazeProviderProps) {
  const { children } = props;
  const [mazeInfo, setMazeInfo] = useState<MazeInfo>(initialMazeInfo);

  return (
    <MazeContext.Provider value={{ mazeInfo, setMazeInfo }}>
      {children}
    </MazeContext.Provider>
  );
}

export { MazeProvider, MazeContext, type MazeInfo };

import { createContext } from "react";

type MazeInfo = {
  grid: number[][];
  isDone: boolean;
};

const initialMazeInfo: MazeInfo = {
  grid: [],
  isDone: false,
};

const MazeContext = createContext<MazeInfo>(initialMazeInfo);

type MazeProviderProps = {
  children: React.ReactNode;
};

function MazeProvider(props: MazeProviderProps) {
  const { children } = props;

  return (
    <MazeContext.Provider value={initialMazeInfo}>
      {children}
    </MazeContext.Provider>
  );
}

export { MazeProvider };

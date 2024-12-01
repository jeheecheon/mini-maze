import Maze from "@/Maze";
import { MazeProvider } from "@/store/maze";

function App() {
  return (
    <MazeProvider>
      <Maze />
    </MazeProvider>
  );
}

export default App;

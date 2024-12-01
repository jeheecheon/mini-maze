import { useEffect } from "react";
import useMazeContext from "@/hooks/useMazeContext";
import { MazeInfo } from "@/store/maze";

function useMazeWebsocket() {
  const { setMazeInfo } = useMazeContext();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/streaming");

    ws.onopen = () => console.log("Connected");
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data) as MazeInfo;
      setMazeInfo(data);
    };
    ws.onclose = () => console.log("Disconnected");
    ws.onerror = (error) => console.error("WebSocket error", error);

    return () => ws.close();
  }, []);

  return null;
}

export default useMazeWebsocket;

import { colCount, rowCount } from "@/utils/constants/maze";
import { drawMaze } from "@/utils/maze";
import { useEffect, useRef, useState } from "react";
import useMazeContext from "@/hooks/useMazeContext";

export default function useMaze() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cellSize, setCellSize] = useState<number>(0);
  const { mazeInfo } = useMazeContext();

  // 캔버스 크기 업데이트 함수
  const updateCanvasSize = () => {
    const containerWidth = window.innerWidth * 0.8;
    const containerHeight = window.innerHeight * 0.8;
    const smallerDimension = Math.min(containerWidth, containerHeight);

    const size = Math.floor(smallerDimension / Math.max(rowCount, colCount));
    setCellSize(size);
  };

  // 화면 크기가 변경될 때마다 캔버스 크기 업데이트
  useEffect(() => {
    updateCanvasSize();

    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  // 셀 크기가 변경될 때마다 캔버스 다시 그리기
  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas && cellSize > 0) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.width = colCount * cellSize;
        canvas.height = rowCount * cellSize;

        drawMaze(ctx, mazeInfo.grid, cellSize);
      }
    }
  }, [cellSize]);

  return { canvasRef };
}

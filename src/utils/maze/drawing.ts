const drawMaze = (
  ctx: CanvasRenderingContext2D,
  grid: number[][],
  cellSize: number
) => {
  // 색상 매핑
  const colorMap: Record<number, string> = {
    0: "black", // 벽
    1: "red", // 현재 위치
    2: "white", // 빈 공간
    3: "blue", // 시작점
    4: "yellow", // 도착점
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      // 해당 값의 색상 선택
      const value = grid[row][col];
      const color = colorMap[value] || "gray"; // 예외 처리 (정의되지 않은 값)

      // 사각형 그리기
      ctx.fillStyle = color;
      ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);

      // 테두리 (옵션)
      ctx.strokeStyle = "gray";
      ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
    }
  }
};

export { drawMaze };

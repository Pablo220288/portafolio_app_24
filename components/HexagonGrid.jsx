"use client";

import { useEffect, useRef, useState } from "react";

const HexagonGrid = () => {
  const gridRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const generateGrid = () => {
    if (!gridRef.current) return;

    const container = gridRef.current.parentNode;
    const wall = {
      width: container.offsetWidth,
      height: container.offsetHeight,
    };

    // Calculate rows and columns
    const rowsNumber = Math.ceil(wall.height / 55);
    const columnsNumber = Math.ceil(wall.width / 50) + 1;

    setDimensions({ rows: rowsNumber, columns: columnsNumber });
  };

  useEffect(() => {
    // Generate grid on mount and resize
    generateGrid();
    window.addEventListener("resize", generateGrid);
    return () => window.removeEventListener("resize", generateGrid);
  }, []);

  return (
    <div id="hexagonGrid" ref={gridRef} suppressHydrationWarning>
      {Array.from({ length: dimensions.rows }).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: dimensions.columns }).map((_, colIndex) => (
            <div className="hexagon" key={`${rowIndex}-${colIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HexagonGrid;

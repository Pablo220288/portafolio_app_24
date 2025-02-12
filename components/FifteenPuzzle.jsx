import React, { useState, useEffect } from "react";

const gridSize = 4;
const tileSize = 80;

const FifteenPuzzle = () => {
  const [tiles, setTiles] = useState([...Array(15).keys(), null]);
  const [emptyIndex, setEmptyIndex] = useState(15);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    shuffleTiles();
  }, []);

  const shuffleTiles = () => {
    let shuffledTiles = [...Array(15).keys(), null];
    let currentEmpty = 15;

    for (let i = 0; i < 1000; i++) {
      let possibleMoves = getPossibleMoves(currentEmpty);
      let move =
        possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      [shuffledTiles[currentEmpty], shuffledTiles[move]] = [
        shuffledTiles[move],
        shuffledTiles[currentEmpty],
      ];
      currentEmpty = move;
    }

    setTiles(shuffledTiles);
    setEmptyIndex(currentEmpty);
    setIsSolved(false);
  };

  const getPossibleMoves = (index) => {
    let moves = [];
    let row = Math.floor(index / gridSize);
    let col = index % gridSize;

    if (row > 0) moves.push(index - gridSize);
    if (row < 3) moves.push(index + gridSize);
    if (col > 0) moves.push(index - 1);
    if (col < 3) moves.push(index + 1);

    return moves;
  };

  const handleTileClick = (index) => {
    if (getPossibleMoves(emptyIndex).includes(index)) {
      let newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [
        newTiles[emptyIndex],
        newTiles[index],
      ];
      setTiles(newTiles);
      setEmptyIndex(index);
      checkWin(newTiles);
    }
  };

  const checkWin = (tilesArray) => {
    if (tilesArray.slice(0, 15).every((val, idx) => val === idx)) {
      setIsSolved(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      {/* Puzzle Container */}
      <div className="relative w-[340px] h-[340px] border bg-primary/5 border-primary/5 rounded-md ">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`absolute w-[70px] h-[70px] flex items-center justify-center text-3xl font-bold rounded-lg transition-all duration-200
              ${
                tile === null
                  ? "bg-black/15 dark:bg-gray-400"
                  : "bg-primary/95 text-white dark:hover:bg-white dark:hover:text-primary hover:bg-[#90aee8] hover:text-black cursor-pointer"
              }`}
            style={{
              top: `${Math.floor(index / gridSize) * tileSize +15}px`,
              left: `${(index % gridSize) * tileSize + 15}px`,
            }}
            onClick={() => handleTileClick(index)}
          >
            {tile !== null ? tile + 1 : ""}
          </div>
        ))}
      </div>

      {/* Shuffle Button */}
      <button
        className="mt-6 px-6 py-3 bg-primary text-white text-lg rounded-lg active:scale-95 active:bg-white active:text-primary transition"
        onClick={shuffleTiles}
      >
        Shuffle
      </button>

      {/* Win Message */}
      {isSolved && (
        <div className="mt-4 text-primary text-lg font-semibold">
          ¡Felicidades! Has ganado 🎉
        </div>
      )}
    </div>
  );
};

export default FifteenPuzzle;

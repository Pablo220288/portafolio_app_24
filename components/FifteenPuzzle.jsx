"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import confetti from "canvas-confetti";
import { set } from "react-hook-form";

const gridSize = 4;
const tileSize = 80;

const FifteenPuzzle = () => {
  const t = useTranslations("Games.games.fifteenPuzzle");

  const game = useRef(null);

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
      const rect = game.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: centerX / window.innerWidth,
          y: centerY / window.innerHeight,
        },
      });

      setTimeout(() => {
        confetti.reset();
      }, 6000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="relative w-full h-[150px]">
        <span className="absolute text-black dark:text-white font-smithgroove text-[70px] top-8 left-[40%] -translate-x-[40%]">
          Fifteen
        </span>
        <span className="absolute text-primary font-hubstone text-[70px] left-[57%] -translate-x-[57%] -z-10">
          15
        </span>
        <span className="absolute text-gray-500 font-Volante text-[35px] top-[5.5rem] left-[60%] -translate-x-[60%]">
          PUZZLE
        </span>
      </div>

      <div
        ref={game}
        className="relative w-[340px] h-[340px] border bg-primary/10 dark:bg-slate-800 border-primary/5 rounded-md "
      >
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`absolute w-[70px] h-[70px] flex items-center justify-center text-3xl font-bold rounded-lg transition-all duration-200
              ${
                tile === null
                  ? "bg-black/15 dark:bg-gray-500"
                  : "bg-primary/95 text-white dark:hover:bg-white dark:hover:text-primary hover:bg-gray-400 hover:text-primary cursor-pointer"
              }`}
            style={{
              top: `${Math.floor(index / gridSize) * tileSize + 15}px`,
              left: `${(index % gridSize) * tileSize + 15}px`,
            }}
            onClick={() => handleTileClick(index)}
          >
            {tile !== null ? tile + 1 : ""}
          </div>
        ))}
      </div>

      <button
        className="mt-6 px-6 py-3 bg-primary text-white text-lg rounded-lg active:scale-95 active:bg-white active:text-primary transition"
        onClick={shuffleTiles}
      >
        {t("button")}
      </button>

      {/* Win Message */}
      {isSolved && (
        <div className="mt-4 text-primary text-lg font-semibold">
          {t("congrats")}
        </div>
      )}
    </div>
  );
};

export default FifteenPuzzle;

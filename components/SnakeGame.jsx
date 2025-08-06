import React, { useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react"; // Ícono de loader
import Image from "next/image";

const SnakeGame = ({ button }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/games/snake/snake_1.png"
        alt="Snake Game"
        width={340}
        height={300}
      />
      <Dialog>
        <DialogTrigger asChild>
          <button className="mt-6 px-6 py-3 bg-primary text-white text-lg rounded-lg active:scale-95 active:bg-white active:text-primary transition">
            {button}
          </button>
          {/* <Button variant="outline">Edit Profile</Button> */}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[460px] h-[700px]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <Loader2 className="w-10 h-10 animate-spin text-gray-500" />
            </div>
          )}
          <iframe
            src="/snake/index.html"
            width="100%"
            height="100%"
            className="rounded-lg"
            onLoad={() => setTimeout(() => setIsLoading(false), 1000)}
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SnakeGame;

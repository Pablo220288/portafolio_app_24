import React, { useEffect, useRef, useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react"; // Ícono de loader

const SnakeGame = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mt-6 px-6 py-3 bg-primary text-white text-lg rounded-lg active:scale-95 active:bg-white active:text-primary transition">
          Game
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
  );
};

export default SnakeGame;

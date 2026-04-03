"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  words: { text: string }[];
  className?: string;
}

export const TypewriterEffect = ({
  words,
  className,
}: TypewriterEffectProps) => {
  const [index, setIndex] = React.useState(0);
  const [display, setDisplay] = React.useState("");
  React.useEffect(() => {
    let current = 0;
    let running = true;
    function tick() {
      if (!running) return;
      const nextWord = words[index]?.text ?? "";
      let i = 0;
      const print = () => {
        setDisplay(nextWord.slice(0, i));
        i++;
        if (i <= nextWord.length) {
          setTimeout(print, 30);
        } else {
          setTimeout(() => {
            setDisplay("");
            setIndex((prev) => (prev + 1) % words.length);
          }, 750);
        }
      };
      print();
    }
    tick();
    return () => {
      running = false;
    };
    // eslint-disable-next-line
  }, [index]);
  React.useEffect(() => {
    setDisplay("");
    // eslint-disable-next-line
  }, [words]);
  return (
    <h1 className={cn("font-heading", className)}>
      {display || words[index]?.text || ""}
      <span className="animate-pulse text-2xl font-bold">|</span>
    </h1>
  );
};

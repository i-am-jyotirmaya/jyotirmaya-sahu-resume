import { useEffect, useRef, useState } from "react";
import SplashSvg from "@/assets/splash.svg";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CursorTrail = () => {
  const MAX_CURSOR_SIZE = 16;
  const LONG_PRESS_INTERVAL = 1200;
  const SPLASH_DURATION_IN_SECONDS = 0.15;

  const ref = useRef<HTMLDivElement>(null);
  const splashAngleRef = useRef("0deg");
  const longPressIntervalRef = useRef<ReturnType<typeof window.setInterval> | null>(null);

  const [isSplashVisible, setIsSplashVisible] = useState(false);
  const [pos, setPos] = useState([0, 0]);
  const [cursorSize, setCursorSize] = useState(3);

  useEffect(() => {
    window.onmousemove = (e) => {
      if (ref.current) {
        ref.current.style.top = `${e.clientY}px`;
        ref.current.style.left = `${e.clientX}px`;
      }
    };
    window.onmousedown = (e) => {
      setPos([e.clientX, e.clientY]);
      setIsSplashVisible(true);
      longPressIntervalRef.current = setInterval(() => {
        setCursorSize((prevSize) => {
          const newSize = prevSize + 3 >= MAX_CURSOR_SIZE - 1 ? MAX_CURSOR_SIZE : prevSize + 3;

          if (newSize === MAX_CURSOR_SIZE) {
            clearInterval(longPressIntervalRef.current!);
            longPressIntervalRef.current = null;
          }

          return newSize;
        });
      }, LONG_PRESS_INTERVAL);
      setTimeout(() => {
        setIsSplashVisible(false);
        splashAngleRef.current = `${Math.random() * 360}deg`;
      }, SPLASH_DURATION_IN_SECONDS * 1000);
    };
    window.onmouseup = () => {
      if (longPressIntervalRef.current) {
        console.log("clearing interval on up", longPressIntervalRef.current);
        clearInterval(longPressIntervalRef.current);
        longPressIntervalRef.current = null;
      }
      setCursorSize(3);
    };
  }, [cursorSize]);

  const commonStyles = {
    rotateZ: splashAngleRef.current,
    translateX: "-50%",
    translateY: "-50%",
  };

  return (
    <>
      <div
        ref={ref}
        className={cn(
          "transition-[width,height] h-3 w-3 bg-white border-2 rounded-full border-black fixed z-[999] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
          `h-${cursorSize} w-${cursorSize}`,
          {
            "bg-yellow-300": cursorSize === 6,
            "bg-amber-400": cursorSize === 9,
            "bg-orange-400": cursorSize === 12,
            "bg-red-500": cursorSize === MAX_CURSOR_SIZE,
          }
        )}
      ></div>
      <AnimatePresence>
        {isSplashVisible ? (
          <motion.img
            key="splash"
            className={`fixed h-12 w-12 z-[999] select-none pointer-events-none -translate-x-1/2 -translate-y-1/2 left-[${pos[0]}px] top-[${pos[1]}px]`}
            style={{
              left: pos[0],
              top: pos[1],
            }}
            initial={{
              scale: 0,
              opacity: 1,
              ...commonStyles,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              ...commonStyles,
              transition: { duration: SPLASH_DURATION_IN_SECONDS },
            }}
            exit={{
              scale: 1.5,
              opacity: 0,
              ...commonStyles,
            }}
            transition={{ type: "spring", duration: 0.2 }}
            height={40}
            width={40}
            src={SplashSvg}
          />
        ) : (
          <></>
        )}
      </AnimatePresence>
    </>
  );
};

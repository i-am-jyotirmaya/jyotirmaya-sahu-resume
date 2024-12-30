import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FC, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";

type MagicMenuItem = {
  title: string;
  link: string;
};

export type MagicMenuProps = {
  menuItems: MagicMenuItem[];
};

export const MagicMenu: FC<MagicMenuProps> = ({ menuItems }) => {
  const [magicActive, setMagicActive] = useState(false);
  const navigate = useNavigate();

  const createMenuItems = () => {
    const radius = 500;
    const baseAngle = Math.PI / 12;

    return menuItems.map((item, index) => {
      const centerX = -50 - radius;
      const centerY = -50;

      const angle = baseAngle * (index % 2 === 0 ? (index + 2) / 2 : ((index + 1) / 2) * -1);

      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      const topValue = centerY + y;
      const leftValue = centerX + x;
      return (
        <motion.button
          key={item.link}
          className="bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-full h-20 w-20 md:h-28 md:w-28 text-xs font-thin uppercase"
          variants={{
            hidden: {
              top: "-50%",
              left: "-50%",
              zIndex: 0,
              opacity: 0,
            },
            visible: {
              top: `${topValue}%`,
              left: `${leftValue}%`,
              zIndex: 0,
              opacity: 1,
            },
          }}
          animate={magicActive ? "visible" : "hidden"}
          transition={{ duration: 0.5, type: "spring", delay: (index + 1) * 0.1 }}
          onClick={() => navigate(item.link)}
        >
          {item.title}
        </motion.button>
      );
    });
  };

  return (
    <div className="relative *:absolute *:-top-1/2 *:-left-1/2 h-20 w-20 md:h-28 md:w-28 *:transform *:translate-x-1/2 *:translate-y-1/2">
      <Button
        size="icon"
        className="rounded-full h-20 w-20 md:h-28 md:w-28 z-[1]"
        onClick={() => setMagicActive(!magicActive)}
      >
        <AnimatePresence mode="wait">
          {magicActive ? (
            <motion.span
              key="x"
              initial={{
                rotateZ: -180,
                opacity: 1,
              }}
              animate={{
                rotateZ: 0,
                opacity: 1,
              }}
              exit={{
                rotateZ: 180,
                opacity: 0,
              }}
              transition={{ duration: 0.25, type: "spring" }}
            >
              <X />
            </motion.span>
          ) : (
            <motion.span
              key="click"
              className="uppercase text-xs font-thin underline underline-offset-4"
              initial={{
                rotateZ: -180,
                opacity: 1,
              }}
              animate={{
                rotateZ: 0,
                opacity: 1,
              }}
              exit={{
                rotateZ: 180,
                opacity: 0,
              }}
              transition={{ duration: 0.25, type: "spring" }}
            >
              click
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
      {createMenuItems()}
    </div>
  );
};

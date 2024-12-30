import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FC, useState } from "react";

import { motion } from "framer-motion";
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
    const r = 3804.29;

    return menuItems.map((item, index) => {
      const topValue = -50 + (index + 1) * 125;
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
              left: `-${calculateLeftValue((index + 1) * 125, r) + 100}%`,
              zIndex: 0,
              opacity: 1,
            },
          }}
          animate={magicActive ? "visible" : "hidden"}
          transition={{ duration: 0.5, type: "spring" }}
          onClick={() => navigate(item.link)}
        >
          {item.title}
        </motion.button>
      );
    });
  };

  const calculateLeftValue = (y: number, r: number) => {
    return Math.sqrt(r ** 2 - y ** 2) - r;
  };

  return (
    <div className="relative *:absolute *:-top-1/2 *:-left-1/2 h-20 w-20 md:h-28 md:w-28 *:transform *:translate-x-1/2 *:translate-y-1/2">
      <Button
        size="icon"
        className="rounded-full h-20 w-20 md:h-28 md:w-28 z-[1]"
        onClick={() => setMagicActive(!magicActive)}
      >
        {magicActive ? (
          <X />
        ) : (
          <span className="uppercase text-xs font-thin underline underline-offset-4">click</span>
        )}
      </Button>
      {createMenuItems()}
      {/* <motion.button
        className={cn(
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-full h-28 w-28 text-xs font-thin uppercase",
          { "pointer-events-none": !magicActive }
        )}
        variants={{
          hidden: {
            top: "-50%",
            left: "-50%",
            zIndex: 0,
            opacity: 0,
          },
          visible: {
            top: "75%",
            left: `-${calculateLeftValue(75, 3804.29) + 100}%`,
            zIndex: 0,
            opacity: 1,
          },
        }}
        animate={magicActive ? "visible" : "hidden"}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Resume
      </motion.button> */}
      {/* <motion.button
        className={cn(
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-full h-28 w-28 text-xs font-thin uppercase",
          { "pointer-events-none": !magicActive }
        )}
        variants={{
          hidden: {
            top: "-50%",
            left: "-50%",
            zIndex: 0,
            opacity: 0,
          },
          visible: {
            top: "-175%",
            left: `-${calculateLeftValue(-175, 3804.29) + 100}%`,
            zIndex: 0,
            opacity: 1,
          },
        }}
        animate={magicActive ? "visible" : "hidden"}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Resume 1
      </motion.button> */}
    </div>
  );
};

import "@/pages/home/Home.scss";
import { transition } from "@/transition";
import { MagicMenu } from "@/components/ui/magic-menu";
import { useEffect, useState } from "react";

export const Home = transition(() => {
  // TODO: Implement effect inspired by https://codepen.io/Hyperplexed/pen/rNrJgrd
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dataString, setDatastring] = useState("welcome");

  const colorsClasses = [
    ["text-red-600", "text-red-100", "text-red-800"],
    ["text-orange-400", "text-orange-100", "text-orange-800"],
    ["text-yellow-400", "text-yellow-100", "text-yellow-800"],
    ["text-lime-400", "text-lime-100", "text-lime-800"],
    ["text-green-500", "text-green-100", "text-green-800"],
    ["text-teal-400", "text-teal-100", "text-teal-800"],
    ["text-sky-400", "text-sky-100", "text-sky-800"],
  ];

  const getJsx = () => {
    return [...dataString].map((c, i) => (
      <span
        key={c + i}
        data-char={c}
        className={`hover:${colorsClasses[i][0]} before:${colorsClasses[i][1]} after:${colorsClasses[i][2]} hover:capitalize`}
      >
        {c}
      </span>
    ));
  };

  useEffect(() => {});

  return (
    <div className="h-screen grid place-items-center">
      <div className="flex justify-center items-center md:gap-10 gap-7 align-baseline">
        <p className="md:text-9xl text-5xl font-black text-center cursor-crosshair welcome-text *:transition-colors">
          {getJsx()}
        </p>
        <MagicMenu
          menuItems={[
            { title: "Resume", link: "/resume" },
            { title: "About", link: "#" },
            { title: "Blog", link: "##" },
          ]}
        />
      </div>
    </div>
  );
});

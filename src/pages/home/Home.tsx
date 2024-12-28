import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "@/pages/home/Home.scss";
import { transition } from "@/transition";
import { Link } from "react-router";

export const Home = transition(() => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex justify-center items-center gap-10 align-baseline">
        <p className="text-9xl font-black text-center cursor-crosshair welcome-text *:transition-colors">
          <span
            data-char="w"
            className="hover:text-red-600 before:text-red-100 after:text-red-800 hover:capitalize"
          >
            w
          </span>
          <span
            data-char="e"
            className="hover:text-orange-400 before:text-orange-100 after:text-orange-800 hover:capitalize"
            // className="hover:text-blue-500 before:text-blue-100 after:text-blue-800"
          >
            e
          </span>
          <span
            data-char="l"
            className="hover:text-yellow-400 before:text-yellow-100 after:text-yellow-800 hover:capitalize"
          >
            l
          </span>
          <span
            data-char="c"
            className="hover:text-lime-400 before:text-lime-100 after:text-lime-800 hover:capitalize"
          >
            c
          </span>
          <span
            data-char="o"
            className="hover:text-green-500 before:text-green-100 after:text-green-800 hover:capitalize"
          >
            o
          </span>
          <span
            data-char="m"
            className="hover:text-teal-400 before:text-teal-100 after:text-teal-800 hover:capitalize"
          >
            m
          </span>
          <span
            data-char="e"
            className="hover:text-sky-400 before:text-sky-100 after:text-sky-800 hover:capitalize"
          >
            e
          </span>
        </p>
        <Link to="/resume">
          <Button size="icon" className="rounded-full h-28 w-28">
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
});

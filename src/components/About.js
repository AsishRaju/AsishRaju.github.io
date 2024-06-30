import React from "react";
import { motion } from "framer-motion";
import { FaEye as Eye } from "react-icons/fa";
import ReactGA from "react-ga4";

const About = () => {
  const redirect = () => {
    ReactGA.send({ hitType: "pageview", page: "/resume", title: "Viewed Resume" });
    window.open(
      "https://drive.google.com/file/d/1S-GrqZRlLjbj42X1c7O4Zwb_RIto5URt/view?usp=sharing",
      "_blank",
      "noreferrer"
    );
  };

  return (
    <motion.div
      className="mt-32 p-10 pt-12 h-auto flex flex-col justify-evenly items-start md:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <article className="grid grid-cols-1 md:items-center md:w-2/5 md:p-2">
        <h1 className="font-bold text-lg mb-8">wiki about me</h1>
        <p className="text-md">
          just a guy who loves to <span className="font-bold text-sky-500">build software</span>,
          design systems and collects hot wheels that's how I would describe myself but in two words
          i am <span className="font-bold text-sky-500">passionate</span> and{" "}
          <span className="font-bold text-sky-500">creative</span>.
        </p>
        <br></br>
        <p className="text-md">
          when my code editor is not open, i put my{" "}
          <a href="https://open.spotify.com/playlist/5gKRHhqMHnxy4JrAFikK86">
            <span className="font-bold text-green-500">spotify</span>
          </a>{" "}
          playlist on loop / find some interesting video on yt to{" "}
          <span className="font-bold text-green-500">watch</span> / head out to{" "}
          <span className="font-bold text-green-500">nature</span> / play cricket and of course
          watch F1 on race <span className="font-bold text-green-500">weekends.</span>
        </p>
        <br></br>
        <p className="text-md">
          currently a grad student @ san jose state university, and i'm looking for{" "}
          <span className="underline decoration-sky-600 decoration-4">
            fullstack developer roles as summer intern
          </span>
        </p>
        <br></br>
        <p className="text-md">
          Hit me up on{" "}
          <a
            href="https://www.linkedin.com/in/asishraju/"
            target="_blank."
            className="underline decoration-green-500 decoration-2 hover:decoration-green-600"
          >
            linkedin
          </a>{" "}
          or{" "}
          <a
            href="mailto:vashish888@gmail.com"
            target="_blank."
            className="underline decoration-green-500 decoration-2 hover:decoration-green-600"
          >
            mail
          </a>
          .
        </p>
        <br></br>
        <a>
          <button
            onClick={redirect}
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mb-4 w-30"
          >
            <div className="flex items-center gap-2">
              <Eye />
              resume
            </div>
          </button>
        </a>
        <p className="text-md">peace out ✌🏼</p>
      </article>
    </motion.div>
  );
};

export default About;

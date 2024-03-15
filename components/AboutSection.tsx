import React from "react";
import Image from "next/image";
const skills = [
  { skill: "C#" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Bootstrap" },
  { skill: "MUI" },
  { skill: "Sendgrid" },
  { skill: "Contentful" },
];

function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-40">
        <h1 className="text-center font-bold text-4xl">About Me
        <hr className="w-9 h-1 mx-auto my-5 bg-lime-500 border- 0 rounded"></hr></h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center alig-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-2/3">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              {" "}
              Get to know me!
            </h1>
            <br />
            <p>
              {""}
              My name is Joar and I am a
              <span className="text-lime-700"> versatile </span> and
              <span className="text-lime-700"> driven </span>
              coder with experience in various programming technologies .
            </p>
            <br />
            <p>
              My education and professional background have provided me with a
              strong technical foundation and the ability to adapt to various
              roles. With a background as a recreation educator and team leader,
              I have developed leadership skills and excellent communication
              competence.
            </p>
            <br />
            <p>
              Problem-solving has been a central part of my education and
              professional life, and it is an aspect that motivates me.
            </p>
            <br />
            <p>
              In my free time, since my teenage years, I have immersed myself in
              the world of dance, exploring various styles such as modern dance,
              popping, and salsa. Over the years, I have had the opportunity to
              travel abroad and explore different dance techniques, which has
              enriched my life in many ways.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return <p key={idx} className="bg-lime-700 px-4 py-2 mr-2 mt-2 text-gray-200 ">{item.skill}</p>;
              })}
            </div>
            <Image
            src="/unicat.png"
            alt=""
            width={325}
            height={325}
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

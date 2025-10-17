import Typography from "@/components/common/Text/Text";
import Section from "@/components/layouts/Section/Section";
import SkillsItem from "./SkillsItem";
import {
  SiExpress,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiTypescript,
} from "react-icons/si";
import {
  FaBootstrap,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaGolang,
  FaLaravel,
  FaNode,
  FaReact,
  FaVuejs,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

const SkillSection = () => {
  return (
    <Section
      className={`
  `}
    >
      <div className={``} id="techstack-section">
        <Typography className="font-semibold text-lg md:text-2xl text-center ">
          Tech Stack & Core Expertise
        </Typography>

        <div className="my-2"></div>

        <Typography className="text-gray-300 text-sm md:text-base  text-center">
          A curated overview of the tools and technologies I use to design,
          build, and maintain <br className="hidden md:block" /> modern web
          applications. From crafting responsive user interfaces to developing
          robust backend systems, <br className="hidden md:block" /> I focus on
          creating scalable, high-performance, and maintainable solutions.
        </Typography>
      </div>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
        <div className="flex flex-col gap-5 border w-full py-8 items-center rounded-3xl border-gray-500 bg-dark-2">
          <h6 className="text-lg font-semibold text-center mb-3 ">
            Languages & Core
          </h6>

          <div className="grid grid-cols-2 gap-7">
            <SkillsItem year={3} name="Javascript">
              <SiJavascript className="text-3xl" color="#F7DF1E" />
            </SkillsItem>

            <SkillsItem year={3} name="Typescript">
              <SiTypescript className="text-3xl" color="#3178C6" />
            </SkillsItem>

            <SkillsItem year={1} name="Golang">
              <FaGolang className="text-3xl" color="#00ADD8" />
            </SkillsItem>

            <SkillsItem year={2} name="PHP">
              <SiPhp className="text-3xl" color="#777BB4" />
            </SkillsItem>
          </div>
        </div>

        <div className="flex flex-col gap-5 border w-full py-8 items-center rounded-3xl border-gray-500 bg-dark-2">
          <h6 className="text-lg font-semibold text-center  mb-3 ">
            Front End Stack
          </h6>

          <div className="grid grid-cols-2 gap-7 ">
            <SkillsItem year={3} name="React JS">
              <FaReact className="text-3xl" color="#00DBFF" />
            </SkillsItem>

            <SkillsItem year={3} name="Next.js">
              <SiNextdotjs className="text-3xl" color="white" />
            </SkillsItem>

            <SkillsItem year={1} name="Vue.js">
              <FaVuejs className="text-3xl" color="#42B883" />
            </SkillsItem>

            <SkillsItem year={3} name="Bootstrap">
              <FaBootstrap className="text-3xl" color="#7952B3" />
            </SkillsItem>

            <SkillsItem year={3} name="Tailwind">
              <RiTailwindCssFill className="text-3xl" color="#06B6D4" />
            </SkillsItem>
          </div>
        </div>

        <div className="flex flex-col gap-5 border w-full py-8 items-center rounded-3xl border-gray-500 bg-dark-2 ">
          <h6 className="text-lg font-semibold text-center  mb-3 ">
            Back End Stack
          </h6>

          <div className="grid grid-cols-2 gap-7">
            <SkillsItem year={3} name="Node JS">
              <FaNode className="text-3xl" color="#339933" />
            </SkillsItem>

            <SkillsItem year={1} name="Laravel">
              <FaLaravel className="text-3xl" color="#FF2D20" />
            </SkillsItem>

            <SkillsItem year={3} name="Express.js">
              <SiExpress className="text-3xl" color="white" />
            </SkillsItem>
          </div>
        </div>

        <div className="flex flex-col gap-5 border w-full py-8 items-center rounded-3xl border-gray-500 bg-dark-2 ">
          <h6 className="text-lg font-semibold text-center  mb-3 ">Database</h6>

          <div className="grid grid-cols-2 gap-7">
            <SkillsItem year={3} name="MySQL">
              <SiMysql className="text-3xl" color="#F29111" />
            </SkillsItem>

            <SkillsItem year={2} name="Postgresql">
              <BiLogoPostgresql className="text-3xl" color="#336791" />
            </SkillsItem>
          </div>
        </div>

        <div className="flex flex-col gap-5 border w-full py-8 items-center rounded-3xl border-gray-500 bg-dark-2">
          <h6 className="text-lg font-semibold text-center  mb-3 ">Tools</h6>

          <div className="grid grid-cols-2 gap-7">
            <SkillsItem year={2} name="Docker">
              <FaDocker className="text-3xl" color="#2496ED" />
            </SkillsItem>

            <SkillsItem year={3} name="Github">
              <FaGithub className="text-3xl" color="white" />
            </SkillsItem>

            <SkillsItem year={3} name="Gitlab">
              <FaGitlab className="text-3xl" color="#FC6D26" />
            </SkillsItem>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillSection;

"use client";

import Button from "@/components/common/Button/Button";
import Typography from "@/components/common/Text/Text";
import Container from "@/components/layouts/Container/Container";
import Header from "@/components/layouts/Header/Header";
import Section from "@/components/layouts/Section/Section";
import Image from "next/image";
import ProfilePic from "../assets/images/profile_pic.png";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsPersonWorkspace,
} from "react-icons/bs";
import IconLink from "@/components/common/Icons/IconLink";
import { RiStackLine } from "react-icons/ri";
import { PiCodepenLogo } from "react-icons/pi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import SkillSection from "@/components/features/techstack/SkillSection";
import { useState } from "react";
import { ProjectSection } from "@/components/features/projects/ProjectSection";
import TabButton from "@/components/common/Button/TabButton";
import CertificateSection from "@/components/features/certificates/CertificateSection";
import ExperienceSection from "@/components/features/experience/ExperienceSection";

export default function Home() {
  const [tabActive, setTabActive] = useState<number>(1);
  const [, setVisibleSection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChangeSection = (tab: number) => {
    if (tab === tabActive || isAnimating) return; // hindari spam klik

    setIsAnimating(true);
    setTabActive(tab);

    // tunggu transisi fade out selesai sebelum ganti konten
    setTimeout(() => {
      setVisibleSection(tab);
      setIsAnimating(false);
    }, 700); // durasi harus sama dengan duration-700
  };

  return (
    <div className="text-white">
      <Header />
      <div className=" md:px-28 lg:px-32">
        <Container>
          <Section direction="row" justify="between">
            <Section direction="column">
              <Typography className="text-light text-md md:text-xl lg:text-2xl animate-bounce">
                Hi, I&apos;m Rafly Masloman
              </Typography>

              <div className="flex flex-col gap-y-4 mt-8 md:mt-12 mb-16 ">
                <Typography className="text-3xl lg:text-4xl text-light font-semibold ">
                  An <span className="text-secondary">Enthusiast</span>{" "}
                  <br className="block md:hidden" />
                  Software Engineer
                </Typography>

                <Typography className="text-light font-light text-sm md:text-lg text-justify w-full md:w-5/6 lg:w-full">
                  I turn ideas into interactive, scalable, and meaningful web
                  experiences. Whether it&apos;s designing smooth UI flows or
                  optimizing backend performance, I find joy in every pixel and
                  every line of code.
                </Typography>

                <Typography className="text-light font-light text-sm md:text-lg text-justify w-full md:w-5/6 lg:w-full">
                  Beyond the keyboard, I&apos;m a curious learner, tech
                  enthusiast, and a believer in simplicity — because great
                  things don&apos;t need to be complicated.
                </Typography>

                <Typography className="text-light font-light text-sm md:text-lg text-justify w-full md:w-5/6 lg:w-full ">
                  Let&apos;s connect and create something awesome together.
                </Typography>
              </div>

              <Button varianst="secondary" className="cursor-pointer">
                Get in touch <span className="ml-2">{`-->`}</span>
              </Button>

              <div className="flex gap-5 md:hidden mt-10">
                <h4 className=""> {"- - - >"} </h4>
                <IconLink url="https://www.linkedin.com/in/rafmasloman/">
                  <BsLinkedin
                    color="white"
                    className="text-2xl animate-pulse"
                  />
                </IconLink>
                <IconLink url="https://www.instagram.com/rafmasloman">
                  <BsInstagram
                    color="white"
                    className="text-2xl animate-pulse"
                  />
                </IconLink>
                <BsGithub color="white" className="text-2xl animate-pulse" />
              </div>
            </Section>

            <Section
              direction="row"
              justify="end"
              className="items-center md:w-full"
            >
              <Image
                src={ProfilePic}
                alt=""
                className="w-[350px] mr-12 hidden md:block"
              />

              <div className="md:flex flex-col gap-7 hidden">
                <IconLink url="https://www.linkedin.com/in/rafmasloman/">
                  <BsLinkedin
                    color="white"
                    className="text-3xl animate-pulse"
                  />
                </IconLink>
                <IconLink url="https://www.instagram.com/rafmasloman">
                  <BsInstagram
                    color="white"
                    className="text-3xl animate-pulse"
                  />
                </IconLink>
                <BsGithub color="white" className="text-3xl animate-pulse" />
              </div>
            </Section>
          </Section>
        </Container>
      </div>

      <div className="flex gap-10 justify-center ">
        <div className="border-y flex gap-3 w-full md:w-1/2 justify-around border-y-gray-600 py-5">
          <TabButton
            tabActive={tabActive}
            activeTab={1}
            text="Tech Stack"
            onClick={() => handleChangeSection(1)}
          >
            <RiStackLine className="text-lg md:text-2xl " />
          </TabButton>

          <TabButton
            tabActive={tabActive}
            activeTab={2}
            text="Projects"
            onClick={() => handleChangeSection(2)}
          >
            <PiCodepenLogo className="text-lg md:text-2xl " />
          </TabButton>

          <TabButton
            tabActive={tabActive}
            activeTab={3}
            text="Certificates"
            onClick={() => handleChangeSection(3)}
          >
            <HiOutlineBadgeCheck className="text-lg md:text-2xl " />
          </TabButton>

          <TabButton
            tabActive={tabActive}
            activeTab={4}
            text="Experience"
            onClick={() => handleChangeSection(4)}
          >
            <BsPersonWorkspace className="text-lg md:text-2xl " />
          </TabButton>
        </div>
      </div>

      <div
        className={`
          transition-all duration-700 ease-out transform
          ${
            tabActive === 1
              ? "opacity-100 translate-y-0 pointer-events-auto h-auto"
              : "opacity-0 -translate-y-5 pointer-events-none h-0 overflow-hidden"
          }
        `}
      >
        <Container>
          <SkillSection />
        </Container>
      </div>

      <div
        className={`
          transition-all duration-700 ease-out transform
          ${
            tabActive === 2
              ? "opacity-100 translate-y-0 pointer-events-auto h-auto"
              : "opacity-0 -translate-y-5 pointer-events-none h-0 overflow-hidden"
          }
        `}
      >
        <Container>
          <ProjectSection />
        </Container>
      </div>

      <div
        className={`
          transition-all duration-700 ease-out transform
          ${
            tabActive === 3
              ? "opacity-100 translate-y-0 pointer-events-auto h-auto"
              : "opacity-0 -translate-y-5 pointer-events-none h-0 overflow-hidden"
          }
        `}
      >
        <Container>
          <CertificateSection />
        </Container>
      </div>

      <div
        className={`
          transition-all duration-700 ease-out transform
          ${
            tabActive === 4
              ? "opacity-100 translate-y-0 pointer-events-auto h-auto"
              : "opacity-0 -translate-y-5 pointer-events-none h-0 overflow-hidden"
          }
        `}
      >
        <Container>
          <ExperienceSection />
        </Container>
      </div>
    </div>
  );
}

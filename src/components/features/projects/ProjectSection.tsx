import Typography from "@/components/common/Text/Text";
import Section from "@/components/layouts/Section/Section";
import { ProjectItemData } from "../general/data";
import ProjectItem from "./ProjectItem";

export const ProjectSection = () => {
  const projectItem = ProjectItemData.map((item, index) => {
    return (
      <ProjectItem
        key={index + 1}
        title={item.title}
        image={item.image}
        link={item.link}
        role={item.role}
        description={item.description}
        company={item.company}
      />
    );
  });

  return (
    <Section>
      <div className="">
        <Typography className="font-semibold text-base md:text-2xl text-center">
          What I&apos;ve Been Working On
        </Typography>

        <div className="my-2"></div>

        <Typography className="text-gray-400 text-sm md:text-base md:px-56 text-center">
          Here&apos;s a collection of my work — spanning internal systems built
          for enterprise use, freelance projects for various clients, and
          public-facing platforms designed for everyday users. Each project
          reflects my focus on scalability, clean architecture, and meaningful
          user experiences.
        </Typography>
      </div>

      <div className="my-10"></div>

      <div className="flex flex-col gap-24 md:gap-10 ">{projectItem}</div>
    </Section>
  );
};

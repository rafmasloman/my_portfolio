"use client";

import Typography from "@/components/common/Text/Text";
import { ExperienceItemData } from "../general/data";
import ExperienceItem from "./ExperienceItem";
import Section from "@/components/layouts/Section/Section";
import { MdOutlineWork } from "react-icons/md";

const ProfessionalSection = () => {
  return (
    <Section className="gap-10">
      <div className="flex items-center gap-3">
        <MdOutlineWork className="text-2xl" />
        <Typography className="text-lg md:text-2xl font-semibold ">
          Careers
        </Typography>
      </div>

      {ExperienceItemData.map((item, index) => {
        return <ExperienceItem key={index + 1} {...item} />;
      })}
    </Section>
  );
};

export default ProfessionalSection;

"use client";

import Typography from "@/components/common/Text/Text";
import Section from "@/components/layouts/Section/Section";
import ProfessionalSection from "./ProfessionalSection";
import OrganizationalSection from "./OrganizationSection";

const ExperienceSection = () => {
  return (
    <Section>
      <div className={``} id="techstack-section">
        <Typography className="font-semibold text-lg md:text-2xl text-center ">
          Experiences
        </Typography>

        <div className="my-2"></div>

        <Typography className="text-gray-300 text-sm md:text-base  text-center">
          My professional and organizational experiences have allowed me to grow
          beyond coding <br className="hidden md:block" /> learning how to work
          with teams, manage projects, and turn ideas into real, meaningful
          products.
        </Typography>
      </div>

      <div className="my-3"></div>

      <ProfessionalSection />
      <OrganizationalSection />
    </Section>
  );
};

export default ExperienceSection;

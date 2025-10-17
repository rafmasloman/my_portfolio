import Typography from "@/components/common/Text/Text";
import { ExperienceItemData } from "../general/data";
import ExperienceItem from "./ExperienceItem";
import Section from "@/components/layouts/Section/Section";

const ProfessionalSection = () => {
  return (
    <Section className="gap-10">
      <Typography className="text-lg md:text-3xl font-semibold underline">
        Professional Experience
      </Typography>

      {ExperienceItemData.map((item, index) => {
        return <ExperienceItem key={index + 1} {...item} />;
      })}
    </Section>
  );
};

export default ProfessionalSection;

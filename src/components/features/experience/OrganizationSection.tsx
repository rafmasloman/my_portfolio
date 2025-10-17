import Typography from "@/components/common/Text/Text";
import Section from "@/components/layouts/Section/Section";
import { OrganizationalItemData } from "../general/data";
import OrganizationalItem from "./OrganizationalItem";

const OrganizationalSection = () => {
  return (
    <Section className="gap-10">
      <Typography className="text-lg md:text-3xl font-semibold underline">
        Organizational Experience
      </Typography>

      {OrganizationalItemData.map((item, index) => {
        return (
          <OrganizationalItem
            key={index + 1}
            name={item.name}
            division={item.division}
            point_description={item.point_description}
            position={item.position}
          />
        );
      })}
    </Section>
  );
};

export default OrganizationalSection;

import Typography from "@/components/common/Text/Text";
import Section from "@/components/layouts/Section/Section";
import { CertificateItemData } from "../general/data";
import CertificateItem from "./CertificateItem";

const CertificateSection = () => {
  const listItemCertificate = CertificateItemData.map((item, index) => {
    return <CertificateItem key={index + 1} imgUrl={item.image} />;
  });

  return (
    <Section>
      <div className={``} id="techstack-section">
        <Typography className="font-semibold text-lg md:text-2xl text-center ">
          My Certificates
        </Typography>

        <div className="my-2"></div>

        <Typography className="text-gray-300 text-sm md:text-base  text-center">
          A collection of certifications that reflect my commitment to
          continuous learning and professional growth.{" "}
          <br className="hidden md:block" /> Each certification demonstrates
          validated expertise in specific technologies and frameworks I use to
          build modern web solutions.
        </Typography>
      </div>

      <div className="my-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center ">
        {listItemCertificate}
      </div>
    </Section>
  );
};

export default CertificateSection;

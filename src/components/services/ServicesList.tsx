import { IHomePage } from "@/cms-models/home";
import { clsx } from "clsx";
import React from "react";
import { ServiceCard } from "./ServiceCard";
import { useRouter } from "next/router";

type Props = {
  data: IHomePage;
};

export const ServicesList: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const isEnUK = router.locale?.toLowerCase().includes("en-uk");
  const isglobal = router.locale?.toLowerCase().includes("global");

  const services = [
    {
      title: data.section3_card1_title,
      description: data.section3_card1_description,
      image: "Mask group.svg",
      link: `/services/` + data.section3_card1_title,
    },
    {
      title: data.section3_card2_title,
      description: data.section3_card2_description,
      image: "Mask group_3.svg",
      link: `/services/` + data.section3_card2_title,
    },
    {
      title: data.section3_card5_title,
      description: data.section3_card5_description,
      image: "Mask group_5.svg",
      link: `/services/` + data.section3_card5_title,
    },
    {
      title: data.section3_card4_title,
      description: data.section3_card4_description,
      image: "Mask group_2.svg",
      link: `/services/` + data.section3_card4_title,
    },
  ];

  const filteredServices =
    isEnUK || isglobal
      ? services
      : services.filter((service) => !service?.title?.match(/post2pet/i));
  // Place the last service in the second position
  if (filteredServices.length > 1 && !isEnUK && !isglobal) {
    const lastService = filteredServices.pop(); // Remove the last service
    filteredServices.splice(1, 0, lastService!); // Insert the last service at index 1
  }
  return (
    <section className="container mx-auto py-10">
      <div className="max-w-[954px] w-full mx-auto mb-12 text-left md:text-center">
        <div className="sub-heading mb-6">Premier Vet Alliance Services</div>
        <div className="flex flex-col gap-4">
          <p className="text-secondary max-w-[600px] w-full mx-auto">
            At Premier Vet Alliance, we are committed to providing veterinary
            practices with innovative, reliable, and comprehensive solutions to
            enhance preventative pet care in a way that is bespoke to every
            practice.
          </p>
          <p className="text-xl max-w-[600px] w-full mx-auto text-primary">
            Looking to enhance compliance, retention and client satisfaction in
            your practice?
          </p>
          <p className="text-xl text-secondary max-w-[600px] w-full mx-auto font-bold">
            You’re in the right place.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {filteredServices.map((service, index) => (
          <div key={index} className={clsx("w-full mx-auto", "md:w-[80%]")}>
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
              link={service.link}
              variant={index % 2 === 0 ? "info" : "white"}
              align="center"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

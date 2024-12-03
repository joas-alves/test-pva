import { IHomePage } from "@/cms-models/home";
import { clsx } from "clsx";
import React from "react";
import { ServiceCard } from "./ServiceCard";

type Props = {
  data: IHomePage;
};

export const ServicesList: React.FC<Props> = ({ data }) => {
  // Array of services to reduce redundant code
  const services = [
    {
      title: data.section3_card1_title,
      description: data.section3_card1_description,
      image: "Mask group.svg",
    },
    {
      title: data.section3_card2_title,
      description: data.section3_card2_description,
      image:  "Mask group_3.svg",
    },
    {
      title: data.section3_card5_title,
      description: data.section3_card5_description,
      image: "Mask group_5.svg",
    },
    {
      title: data.section3_card4_title,
      description: data.section3_card4_description,
      image: "Mask group_2.svg",
    },
    
  ];

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
        {/* Loop through services array to generate ServiceCards */}
        {services.map((service, index) => (
          <div
            key={index}
            className={clsx(
              "w-full mx-auto", // Make sure cards are full-width on mobile
              "md:w-[80%]", // Cards take 80% of the width on larger screens
              index % 2 === 0 ? "md:text-left" : "md:text-right", // Alternate alignment based on index
              index % 2 === 0 ? "md:pl-0" : "md:pr-0" // Adjust padding based on alignment
            )}
          >
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
              variant={index % 2 === 0 ? "info" : "white"} // Alternate variant
              align={index % 2 === 0 ? "left" : "right"} // Alternate alignment
            />
          </div>
        ))}
      </div>
    </section>
  );
};

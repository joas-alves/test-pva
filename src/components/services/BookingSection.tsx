import Link from "next/link";
import React from "react";

const ServiceBookingSection = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center px-4">
      <p className="text-xl max-w-[600px] w-full mx-auto text-primary text-center">
        Take the first steps towards better healthcare and reach out to a member
        of our team for a free, informal chat today.
      </p>
      <Link href="/get-in-touch">
        <button className="btn primary-outline-btn font-bold mb-[25px] px-10 self-center">
          Get in touch
        </button>
      </Link>
    </div>
  );
};

export { ServiceBookingSection };

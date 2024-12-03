import React from "react";

const PrivacyPersonalData = () => {
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">Personal data we collect and hold</h2>
      <p className="text-lg mb-4">
      We will only collect and hold information that you provide us with whether that be in person, in writing, by telephone, by fax, via our website, by email or any other form of electronic communication or from publicly available sources or third parties.  We may collect the following categories of personal data about you:-
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-1 text-lg mb-4">
        <li>Your name and contact information, such as home address, job title, email and telephone details;</li>
        <li>Biographical information which may confirm your identity including your date of birth, tax identification number, passport or identity card details, country of domicile and/or your nationality;</li>
        <li>Information about your reasons and objectives for securing our services;</li>
        <li>Information to assess whether you may represent a money laundering risk.</li>
      </ul>
    </div>
  );
};

export { PrivacyPersonalData };

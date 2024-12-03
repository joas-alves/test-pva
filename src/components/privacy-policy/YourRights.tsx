import React from "react";

const PrivacyYourRights = () => {
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">Your Rights</h2>
      <p className="text-lg mb-4">Under GDPR you have the following rights:-</p>
      <ul className="list-disc mb-4 pl-5 flex flex-col gap-1 text-lg">
        <li><strong className="font-extrabold">Right to be informed</strong> – you have the right to be informed about the collection and use of your personal data;</li>
        <li><strong className="font-extrabold">Right of access</strong> – you have the right to request a copy of the personal data that we hold about you;</li>
        <li><strong className="font-extrabold">Right to rectification</strong> – you have the right to correct the personal data we hold about you if such data is incorrect;</li>
        <li><strong className="font-extrabold">Right to be forgotten</strong> – in certain circumstances you can ask us to erase your personal data;</li>
        <li><strong className="font-extrabold">Right to restrict processing</strong> – where certain conditions apply you can require us to restrict our data processing activities;</li>
        <li><strong className="font-extrabold">Right of portability</strong> – you have the right to have the personal data that we hold about you, that you provided us with, transferred to another data controller;</li>
        <li><strong className="font-extrabold">Right to object</strong> – in certain circumstances, you have the right to object to the processing of your personal data;</li>
        <li><strong className="font-extrabold">Rights related to automated decision making</strong> – this relates to decisions solely made by automated means without human involvement process, such as direct marketing communication.</li>
      </ul>
      <p className="text-lg mb-4">If you have any questions about how we use your personal data or you wish to exercise any of the above rights please contact our Privacy & Data Compliance Officer, as detailed at the end of this Policy.</p>
    </div>
  );
};

export { PrivacyYourRights };

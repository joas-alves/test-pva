import React from "react";

const PrivacyProcessing = () => {
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">Personal data we collect and hold</h2>
      <p className="text-lg mb-4">
      We will process the personal data you provide us with because it is necessary for the performance of our contract with you or for our legitimate business interests or in compliance with any legal obligations we may be under.
      </p>
      <p className="text-lg mb-4">We may use your personal data:-</p>
      <ul className="list-disc mb-4 pl-5 flex flex-col gap-1 text-lg">
        <li>To prepare a proposal in relation to the services that we offer;</li>
        <li>To provide you with the services that you request from us;</li>
        <li>To carry out any obligations arising from any contracts entered into between you and the Company;</li>
        <li>To notify you of any changes to our terms and conditions of business;</li>
        <li>To provide you with information which we feel may be of interest or relevant to you, such as alerts, newsletters and updates;</li>
        <li>To deal with any complaints or feedback from you in relation to such service; or</li>
        <li>For any other purpose for which you provide us with your personal data.</li>
      </ul>
      <p className="text-lg mb-4">As part of our processing of your personal data we may share your data:-</p>
      <ul className="list-disc mb-4 pl-5 flex flex-col gap-1 text-lg">
        <li>with our advisers and/or auditors, where it is necessary for the purposes of obtaining their advice or assistance;</li>
        <li>with third parties who undertake background checks on our behalf;</li>
        <li>if we are under a duty to do so in order to comply with any legal obligations, such as compliance with anti-money launder laws;</li>
        <li>as required by tax authorities or any competent court or legal authority;</li>
        <li>in order to enforce our terms and conditions of business; or</li>
        <li>to protect the rights, property or safety of the Company, its employees or clients.</li>
      </ul>
    </div>
  );
};

export { PrivacyProcessing };

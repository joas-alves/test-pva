import { TermsIntroduction } from "../../components/terms-of-use/Introduction";
import { TermsAlteration } from "../../components/terms-of-use/TermsAlteration";
import { TermsInformation } from "../../components/terms-of-use/TermsInformation";
import { TermsLiability } from "../../components/terms-of-use/TermsLiability";
import { TermsIntellectualProperty } from "../../components/terms-of-use/IntellectualProperty";
import { TermsJurisdiction } from "../../components/terms-of-use/Jurisdiction";
import { TermsQuestions } from "../../components/terms-of-use/Questions";

export default function TermsOfUse() {
  return (
    <section className="container mx-auto pt-10 pb-40">
      <h1 className="sub-heading mb-6">
        <span className="text-primary">Terms</span> of use
      </h1>
      <TermsIntroduction/>
      <TermsAlteration/>
      <TermsInformation/>
      <TermsLiability/>
      <TermsIntellectualProperty/>
      <TermsJurisdiction/>
      <TermsQuestions/>
    </section>
  );
}

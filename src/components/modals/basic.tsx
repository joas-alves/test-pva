import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
type Props = {
  isOpen: boolean;
  onAction: (action: string) => void;
};
export const BasicModal: React.FC<Props> = ({
  isOpen,
  onAction,
}) => {
  return (
    <Dialog open={isOpen} onClose={() => {}} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <div
                        id="wp-disclaimer-popup"
                        className="wpdp-white-popup"
                      >
                        <h3 className="text-primary text-center font-bold mb-2">
                          IMPORTANT NOTICE
                        </h3>

                        <p className="mb-2">
                          The formal review of the various strategic options
                          available to Premier Veterinary Group PLC (the "
                          <strong>Company</strong>") was announced by the
                          Company on 15 September 2023 (the "
                          <strong>Strategic Review</strong>").
                        </p>

                        <p className="mb-2">
                          <strong>
                            YOU ARE ATTEMPTING TO ENTER THE PART OF THIS WEBSITE
                            THAT IS DESIGNATED FOR THE PUBLICATION OF
                            ANNOUNCEMENTS, DOCUMENTS AND INFORMATION IN
                            CONNECTION WITH THE STRATEGIC REVIEW. THIS
                            INFORMATION IS BEING MADE AVAILABLE ON THIS PART OF
                            THE COMPANY’S WEBSITE IN GOOD FAITH AND FOR
                            INFORMATION PURPOSES ONLY IN COMPLIANCE WITH THE UK
                            CITY CODE ON TAKEOVERS AND MERGERS (THE "CODE") AND
                            IS SUBJECT TO THE TERMS AND CONDITIONS SET OUT
                            BELOW.
                          </strong>
                        </p>

                        <p className="mb-2">
                          <strong>
                            PLEASE READ THIS NOTICE CAREFULLY AND IN FULL. IT
                            APPLIES TO ALL PERSONS WHO VIEW THIS PART OF THE
                            WEBSITE AND, DEPENDING ON WHO YOU ARE AND WHERE YOU
                            LIVE, IT MAY AFFECT YOUR RIGHTS. YOU SHOULD NOTE
                            THAT THIS NOTICE MAY BE ALTERED OR UPDATED FROM TIME
                            TO TIME, AND SHOULD BE READ IN FULL EACH TIME YOU
                            VISIT THIS PAGE. IN ADDITION, THE CONTENTS OF THIS
                            PART OF THE WEBSITE MAY BE AMENDED AT ANY TIME
                            WITHOUT NOTICE, IN WHOLE OR IN PART.
                          </strong>
                        </p>

                        <h4 className="text-primary font-bold mb-2">
                          1. ACCESS TO THE STRATEGIC REVIEW MICROSITE
                        </h4>

                        <p className="mb-2">
                          This part of the Company’s website contains
                          announcements, documents and information relating to
                          the Strategic Review (the "
                          <strong>Information</strong>"). Please note that, as
                          the Strategic Review progresses, the Information, as
                          well as the terms of this notice, may be altered or
                          updated. You should read the full text of this notice
                          each time you visit this part of the Company’s
                          website. In addition, the Information may be amended
                          at any time in whole or in part at the sole discretion
                          of the Company.
                        </p>

                        <p className="mb-2">
                          <strong>
                            ACCESS TO THIS PART OF THE COMPANY’S WEBSITE MAY BE
                            RESTRICTED UNDER THE SECURITIES LAWS OF CERTAIN
                            JURISDICTIONS. THIS NOTICE REQUIRES YOU TO CONFIRM
                            CERTAIN MATTERS (INCLUDING THAT YOU ARE NOT RESIDENT
                            IN SUCH A JURISDICTION), BEFORE YOU MAY OBTAIN
                            ACCESS TO THIS INFORMATION. THESE MATERIALS ARE NOT
                            DIRECTED AT, OR TO BE ACCESSED BY, PERSONS RESIDENT
                            IN ANY JURISDICTION WHERE TO DO SO WOULD CONSTITUTE
                            A VIOLATION OF THE RELEVANT LAWS OF THAT
                            JURISDICTION OR WOULD RESULT IN A REQUIREMENT TO
                            COMPLY WITH ANY CONSENT OR OTHER FORMALITY WHICH THE
                            COMPANY REGARDS AS UNDULY ONEROUS.
                          </strong>
                        </p>

                        <p className="mb-2">
                          For regulatory reasons, the Company must ensure that
                          persons seeking to access this part of the Company’s
                          website are made aware of the appropriate regulations
                          for the country which such person is in. In order to
                          access the Information you must be able to make the
                          confirmations listed at the bottom of this notice. If
                          you are unable to make these confirmations, you will
                          not be able to access the Microsite.
                        </p>

                        <h4 className="text-primary font-bold mb-2">
                          2. OVERSEAS JURISDICTIONS
                        </h4>

                        <p className="mb-2">
                          Viewing the Information may not be lawful in certain
                          jurisdictions. In other jurisdictions, only certain
                          categories of person are allowed to view the
                          Information.
                        </p>

                        <p className="mb-2">
                          It is your responsibility to comply with the relevant
                          laws of your jurisdiction. If you are not permitted to
                          view the Information, or viewing the Information would
                          result in a breach of the above, or you are in any
                          doubt as to whether you are permitted to view the
                          Information, please exit this webpage by clicking on
                          the "I disagree" box below.
                        </p>

                        <h4 className="text-primary font-bold mb-2">
                          3. BASIS OF ACCESS TO INFORMATION RELATING TO THE
                          STRATEGIC REVIEW
                        </h4>

                        <p className="mb-2">
                          <strong>
                            YOU SHOULD NOT SHARE THE INFORMATION WITH OR
                            DOWNLOAD, MAIL, FORWARD, DISTRIBUTE OR SEND THE
                            INFORMATION TO ANY PERSON. IN PARTICULAR, YOU SHOULD
                            NOT MAIL, FORWARD, DISTRIBUTE OR SEND THE
                            INFORMATION TO ANY JURISDICTION WHERE IT WOULD BE
                            UNLAWFUL TO DO SO.
                          </strong>
                        </p>

                        <p className="mb-2">
                          The Information is being made available in good faith
                          and for information purposes only. Any person seeking
                          access to this part of the Company’s website
                          represents and warrants to the Company that they are
                          doing so for information purposes only. Making the
                          Information available in electronic format is not
                          intended to and does not constitute an offer to sell
                          or the solicitation of an offer to subscribe for or
                          buy or an invitation to purchase or subscribe for any
                          securities or the solicitation of any vote or approval
                          in any jurisdiction pursuant to the Strategic Review
                          or otherwise.
                        </p>

                        <p className="mb-2">
                          The Information has been prepared for the purposes of
                          complying with English law and the Code and therefore
                          the Information disclosed may not be the same as that
                          which would have been disclosed if this Information
                          had been prepared in accordance with the laws and
                          regulations of any jurisdiction outside of England and
                          Wales.
                          <br />
                          Any shareholder action required in connection with the
                          Strategic Review will only be set out in documents
                          sent to or made available to the Company’s
                          shareholders and any decision made by such
                          shareholders should be made solely and only on the
                          basis of information provided in those documents.
                        </p>

                        <p className="mb-2">
                          If you are in any doubt about the Information or the
                          action you should take, you should seek your own
                          financial advice from an independent financial adviser
                          authorised under the Financial Services and Markets
                          Act 2000 or, if you are located outside the United
                          Kingdom, from an appropriately authorised independent
                          financial adviser.
                        </p>

                        <h4 className="text-primary font-bold mb-2">
                          4. FORWARDLOOKING STATEMENTS
                        </h4>

                        <p>
                          Some of the Information may include statements that
                          are or may be deemed to be “forwardlooking
                          statements”. These statements are prospective in
                          nature and are not based on historical facts, but
                          rather on the current expectations, assumptions and
                          assessments of the management of the Company about
                          future events and are naturally subject to uncertainty
                          and changes in circumstances which could cause actual
                          events to differ materially from the future events
                          expected or implied by the forwardlooking statements.
                          The forwardlooking statements contained in the
                          Information include statements about the expected
                          effects of the Strategic Review on the Company, the
                          expected timing and scope of the Strategic Review,
                          synergies, other strategic options and all other
                          statements in the Information other than historical
                          facts. Forwardlooking statements may (but will not
                          always) include, without limitation, statements
                          typically containing words such as "anticipate",
                          "target", "believe", "intend", "plan", "goal", "hope",
                          "aim", "can", "continue", "could", "may", "should",
                          "estimate", "expect", "opportunity", "will" and
                          "would", and words of similar import. By their nature,
                          forwardlooking statements involve risk and uncertainty
                          because they relate to events and depend on
                          circumstances that will (or might) occur in the
                          future.
                        </p>

                        <p className="mb-2">
                          These forwardlooking statements are not guarantees of
                          future performance and have not been reviewed by the
                          auditors of the Company. There are a number of factors
                          that could cause actual results and developments to
                          differ materially from those expressed or implied by
                          such forwardlooking statements. These factors include,
                          but are not limited to, changes in economic
                          conditions, changes in the level of capital
                          investment, success of business and operating
                          initiatives and restructuring objectives, customers’
                          strategies and stability, changes in the regulatory
                          environment, fluctuations in interest and exchange
                          rates, the outcome of litigation, government actions
                          and natural phenomena such as floods, earthquakes and
                          hurricanes. Other unknown or unpredictable factors
                          could cause actual results to differ materially from
                          those in (or implied by) the forwardlooking
                          statements. Investors should not place undue reliance
                          on any forwardlooking statements. None of the
                          directors of the Company (the{" "}
                          <strong>"Directors"</strong>), the Company or its
                          affiliated companies provides any representation,
                          assurance or guarantee that the occurrence of events
                          expressed or implied in any forwardlooking statement
                          contained in the Information will actually occur.
                        </p>
                        <p className="mb-2">
                          No statement contained or referred to in the
                          Information shall be deemed to be a forecast,
                          projection or estimate of the future financial
                          performance of the Company unless otherwise stated.
                        </p>

                        <h4 className="text-primary font-bold mb-2">5. RESPONSIBILITY</h4>

                        <p className="mb-2">
                          The Information speaks only as at the date of that
                          relevant piece of Information and, subject to any
                          continuing obligations under applicable law or the
                          Code, none of the Directors or the Company or its
                          affiliated companies has, or accepts, any
                          responsibility or duty to update any such information,
                          document or announcement. However, the Company
                          reserves the right to add to, remove or amend any
                          Information at any time.
                        </p>

                        <p className="mb-2">
                          The Directors accept responsibility for the
                          correctness and fairness of the reproduction or
                          presentation of the Information unless the
                          responsibility statement in any relevant document
                          expressly provides otherwise.
                        </p>

                        <p className="mb-2">
                          None of the Directors, the Company or its affiliated
                          companies have reviewed and none of them is
                          responsible for, or accepts any liability in respect
                          of, any information on any other website that may be
                          linked to this website by a third party.
                        </p>

                        <p className="mb-2">
                          Subject to any continuing obligations under applicable
                          law, the Code or any relevant listing rules, the
                          Company expressly disclaims any obligation to
                          disseminate, after the date of the posting of the
                          Information, any updates or revisions to any
                          statements in the Strategic Review to reflect any
                          change in expectations or events, conditions or
                          circumstances on which any such statements are based.
                        </p>

                        <p className="mb-2">
                          Neither the Company nor any of its advisers,
                          associates, directors or officers undertakes any
                          obligation to update publicly, expressly disclaim or
                          revise the Information, whether as a result of new
                          information, future events or otherwise, except to the
                          extent legally required.
                        </p>
                        <p className="mb-2">
                          <strong>
                            THE INFORMATION MAY NOT BE DOWNLOADED BY ANY PERSON
                            EITHER IN WHOLE OR IN PART WHERE TO DO SO WOULD OR
                            MAY CONSTITUTE A BREACH OF ANY APPLICABLE LOCAL LAWS
                            OR REGULATIONS. THIS NOTICE SHALL BE GOVERNED BY,
                            AND INTERPRETED IN ACCORDANCE WITH, ENGLISH LAW.
                          </strong>
                        </p>

                        <h4 className="text-primary font-bold mb-2">
                          6. CONFIRMATION OF UNDERSTANDING AND ACCEPTANCE OF
                          DISCLAIMER:
                        </h4>

                        <ul className="list-disc">
                          <li className="mb-2">
                            I certify that I am not (and that I do not act on
                            behalf of someone who is) resident in any country
                            that renders the accessing of this area of the
                            website or parts thereof illegal.
                          </li>
                          <li className="mb-2">
                            I agree that I will not forward, transfer or
                            distribute (by any means including by electronic
                            transmission) any documents included in this area of
                            the website either in whole or in part to any person
                            in any jurisdiction where such distribution may be
                            restricted by applicable law or regulation.
                          </li>

                          <li className="mb-2">
                            I represent and warrant to the Company that I intend
                            to access this area of the website for information
                            purposes only, that I have read and understood this
                            notice and that I understand that it may affect my
                            rights or responsibilities.
                          </li>

                          <li className="mb-2">
                            I agree to be bound by the terms of this notice. I
                            confirm that I am permitted to proceed to this part
                            of the Company’s website.
                          </li>
                        </ul>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => onAction("disagree")}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Disagree
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => onAction("agree")}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Agree
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

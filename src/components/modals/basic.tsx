import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { useTranslations } from "next-intl";
type Props = {
  isOpen: boolean;
  onAction: (action: string) => void;
};
export const BasicModal: React.FC<Props> = ({
  isOpen,
  onAction,
}) => {
  const t = useTranslations();
  const modalT = useTranslations("StrategicReviewModal");
  
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
                        <h3 className="text-primary text-center font-bold mb-2" >
                          {t("important_notice")}
                        </h3>

                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("intro") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("warning1") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("warning2") }} />

                        <h4 className="text-primary font-bold mb-2" dangerouslySetInnerHTML={{ __html: modalT("section1_title") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section1_content") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section1_warning") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section1_note") }} />

                        <h4 className="text-primary font-bold mb-2" dangerouslySetInnerHTML={{ __html: modalT("section2_title") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section2_content1") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section2_content2") }} />

                        <h4 className="text-primary font-bold mb-2" dangerouslySetInnerHTML={{ __html: modalT("section3_title") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section3_warning") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section3_content1") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section3_content2") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section3_content3") }} />

                        <h4 className="text-primary font-bold mb-2" dangerouslySetInnerHTML={{ __html: modalT("section4_title") }} />
                        <p dangerouslySetInnerHTML={{ __html: modalT("section4_content") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section4_content2") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section4_content3") }} />

                        <h4 className="text-primary font-bold mb-2" dangerouslySetInnerHTML={{ __html: modalT("section5_title") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section5_content1") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section5_content2") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section5_content3") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section5_content4") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section5_content5") }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("section5_warning") }} />

                        <h4 className="text-primary font-bold mb-2" dangerouslySetInnerHTML={{ __html: modalT("section6_title") }} />

                        <ul className="list-disc">
                          <li className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("confirm_item1") }} />
                          <li className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("confirm_item2") }} />
                          <li className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("confirm_item3") }} />
                          <li className="mb-2" dangerouslySetInnerHTML={{ __html: modalT("confirm_item4") }} />
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
                {modalT("disagree_button")}
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => onAction("agree")}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                {modalT("agree_button")}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

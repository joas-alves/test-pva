import { StrategicReviewSection } from "@/components/investors/StrategicReview";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
export default function StrategicReview() {
  const router: NextRouter = useRouter();

  // const [isOpen, setIsOpen] = useState(false);
  // const onAction = (value: string) => {
  //   if (value === "disagree") {
  //     setIsOpen(false);
  //     router.push("/");
  //   } else {
  //     localStorage.setItem("strategicReviewAgree", "true");
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   if (!localStorage.getItem("strategicReviewAgree")) {
  //     setIsOpen(true);
  //   }
  // }, []);

  useEffect(() => {
    if (router.locale !== "global") {
      // Redirect to the homepage if locale is not allowed
      router.replace("/");
    }
  }, [router.locale, router.isReady, router]);
  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <StrategicReviewSection />
      {/* <BasicModal isOpen={isOpen} onAction={onAction} /> */}
    </div>
  );
}

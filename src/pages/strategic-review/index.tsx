import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { StrategicReviewSection } from "@/components/investors/StrategicReview";
import { BasicModal } from "@/components/modals/basic";
export default function StrategicReview() {
  const router: NextRouter = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const onAction = (value: string) => {
    if (value === "disagree") {
      setIsOpen(false);
      router.push("/");
    } else {
      localStorage.setItem("strategicReviewAgree", "true");
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("strategicReviewAgree")) {
      setIsOpen(true);
    }
  }, []);
  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <StrategicReviewSection />
      <BasicModal isOpen={isOpen} onAction={onAction} />
    </div>
  );
}

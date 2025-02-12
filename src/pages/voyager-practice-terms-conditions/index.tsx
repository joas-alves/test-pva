import { useEffect } from "react";
import { useRouter } from "next/router";

export default function VoyagerPracticeOwnerTermsConditions() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/voyager-pet-owner-terms-conditions");
  }, [router]);
  return null;
}

import { PracticeCard } from "@/components/widgets";

export const PracticeSection = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="max-w-[954px] w-full mx-auto mb-12 text-left md:text-center">
        <h2 className="sub-heading mb-6">
          Empowering <span className="text-primary">Your Practice</span> with Health Plans, Technology, and Support
        </h2>
        <p className="text-secondary max-w-[600px] w-full mx-auto">
          At Premier Vet Alliance, we offer a range of tailored services, including preventative health plans, advanced technology solutions, and business support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <div className="md:col-span-2">
          <PracticeCard
            image="Mask group.svg"
            variant="info"
            title="Premier Pet Care Plan"
            description="Our market leading health offer a simple, affordable, and user-friendly solution to premium preventative health care."
          />
        </div>
        <div className="md:col-span-3">
          <PracticeCard
            image="Mask group_3.svg"
            title="Post2Pet"
            description="Affordable and convenient home delivery service from your practice, ensuring timely access to all parasiticide products."
            backgroundClassName="bg-[url('/images/post2pet-mobile.png')] md:bg-[url('/images/post2pet.png')] bg-right-top md:bg-right"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="col-span-2">
          <PracticeCard
            image="Mask group_4.svg"
            title="Vet2Pet"
            description="The new communication platform complements Premier Pet Care Plans and Post2Pet, enabling easy management of updates, deliveries, transactions, and bookings."
            backgroundClassName="bg-[url('/images/vet2pet.png')] bg-right-top bg-57% md:bg-auto"
          />
        </div>
        <div className="col-span-2">
          <PracticeCard
            image="Mask group_2.svg"
            title="Training"
            description="With our expertise in Health Plans, we've developed the PVA Training Academy—an exclusive service offering flexible, tailored training packages, allowing you to choose the support you need, when you need it."
          />
        </div>
        <div className="col-span-2">
          <PracticeCard
            image="Mask group_5.svg"
            variant="info"
            title="Technology"
            description="Our innovative financial platform, the first of its kind in the UK veterinary market, is tailored to vets' needs. As a market leader, it’s highly automated, intuitive, and continually evolving through investment and innovation."
          />
        </div>
      </div>
    </section>
  )
}

import { BookDemoForm } from "@/components/widgets";

export const FullPotentialSection = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className="mb-6">
            <h2 className="sub-heading">Unlock the <span className="text-primary">Full Potential</span> of Your Veterinary Practice</h2>
          </div>
          <div className="body text-secondary">
            Discover how Premier Vet Alliance's tailored solutions can enhance pet care and streamline your clinic’s operations. Book a personalized demo to see how our services can support the growth of your practice.
          </div>
        </div>
        <div>
          <BookDemoForm />
        </div>
      </div>
    </section>
  )
}

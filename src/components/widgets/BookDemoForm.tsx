import { CustomInput, CustomRadioGroup, CustomSelect } from "@/components/common";

export const BookDemoForm = () => {
  return (
    <div className="shadow-paper rounded-3xl p-6 md:p-12 bg-white">
      <h2 className="text-2xl md:text-[32px] font-bold text-primary mb-8">Book a Demo</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <CustomRadioGroup
            wrapperClassName="grid grid-cols-1 md:grid-cols-2 gap-3"
            options={['Veterinary Professional', 'Pet Owner']}
            value="Pet Owner"
            onChange={() => {}}
          />
        </div>
        <div className="col-span-2">
          <CustomInput label="First Name" placeholder="Enter your first name" />
        </div>
        <div className="col-span-2">
          <CustomInput label="Last Name" placeholder="Enter your last name" />
        </div>
        <div className="col-span-2">
          <CustomInput label="Company Name" placeholder="Enter your company name" />
        </div>
        <div className="col-span-2">
          <CustomSelect label="Country" />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-3">
          <CustomInput label="Phone Number" placeholder="+44 123 456 7890" />
          <CustomInput label="E-mail" placeholder="email@example.com" />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-3 pt-3 md:pt-6">
          <button className="btn primary-btn">Talk to us</button>
        </div>
      </div>
    </div>
  )
}

import { DetailsOfTermsAndConditions } from "@/components/pet-owner-terms-conditions/details-of-terms-and-conditions";
import Image from "next/image";
import Link from "next/link";


export default function PetOwnerTermsConditions() {
    return (
        <section className="container mx-auto pt-10 pb-40">
            <h1 className="sub-heading mb-6 text-primary">
                Pet Owner Terms and Conditions
            </h1>
            <Link className="text-lg hover:underline" href="www.google.com">Download the Pet Owner Terms & Conditions</Link>
            <DetailsOfTermsAndConditions />
            <div className="my-4">
                <h2 className="sub-heading mb-4 text-2xl font-black">PRIVACY POLICY</h2>
                <p className="text-lg mb-4">
                    Premier Vet Alliance Limited (company number 07267818)(“PVA”) is the administrator of Your Plan and collects your monthly payments by Direct Debit on behalf of your veterinary surgery. PVA takes your privacy and the protection of your personal data extremely seriously. This privacy policy sets out the basis on which data PVA collects about you, or that you provide to PVA, will be processed by PVA.
                </p>
                <p className="text-lg mb-4">
                    PVA will process the personal details and financial information provided by you in this Agreement and provided to PVA by your veterinary surgery and any updates to that information as provided by your veterinary surgery in connection with Your Plan (“your Personal Data”) in accordance with all applicable data protection and privacy legislation, including Regulation (EU) 2016/679 (the “GDPR”) and any law based on or enacting essentially equivalent provisions to the GDPR in the UK.
                </p>
                <p className="text-lg mb-4">
                    PVA will use your Personal Data for the purpose of administering the Plan, including collecting Direct Debits on behalf of your veterinary surgery. PVA will also share a limited amount of your Personal Data on a pseudonymous basis with CACI Limited for analysis purposes so that PVA can improve the products and services it offers. PVA may also be required to transfer your Personal Data in accordance with the Bacs bulk change process so that the recipient can take over responsibility for the collection or administration of Direct Debits on behalf of your veterinary surgery. PVA’s “legal basis” for these uses is that, as the administrator of the Plan, PVA has an appropriate business need to use your Personal Data for these purposes.
                </p>
                <p className="text-lg mb-4">
                    Please tick the relevant boxes on the first page of this Agreement if you are happy for PVA to use your Personal Data to provide you with information about its other products and services which it considers may be of interest to you. PVA’s “legal basis” for this use is that you have provided your consent to PVA’s use of your Personal Data for marketing purposes. At any stage, you can ask PVA to stop using your Personal Data for marketing purposes and can withdraw any consent you have given to use of your Personal Data. If you would like PVA to stop using your Personal Data for marketing purposes, please write to PVA at the address provided at the end of this privacy policy.
                </p>
                <p className="text-lg mb-4">
                    PVA will keep your Personal Data for as long as is reasonably necessary to comply with the purposes set out in this privacy policy. If you have asked PVA to stop using your Personal Data for marketing purposes, your name and any relevant contact details will be added to and kept on a “suppression list” to make sure that PVA does not send you marketing communications in the future.
                </p>
                <p className="text-lg mb-4">
                    Where relevant to the purposes described in this privacy policy, PVA may share your Personal Data with other third parties who assist in the administration of the Plan, including in relation to the collection or administration of Direct Debits (such as payment processing suppliers and Direct Debits software bureaux), PVA’s third party service providers (such as PVA’s development partner and hosting provider), any third parties who handle PVA’s direct marketing, and selected third parties in connection with any sale, transfer or disposal of PVA’s business. However, PVA will not transfer your Personal Data outside the EEA (where you live in the EEA).
                </p>
                <p className="text-lg mb-4">
                    You have a right to: (a) access information PVA holds about you, and know for what purpose PVA uses that information; (b) correct inaccuracies in information PVA holds about you; and (c) in some circumstances: (i) request that PVA erases information it holds about you; (ii) receive a copy of any personal information provided to PVA by you and require PVA to provide this information to a third party; (iii) restrict the use of your Personal Data by PVA; and (iv) object to the use of your Personal Data by PVA, including where that information is used for direct marketing purposes. You can exercise any of these rights by writing to PVA at the address provided at the end of this privacy policy.
                </p>
                <p className="text-lg mb-4">
                    You have the right to complain to the relevant supervisory authority in any jurisdiction about PVA’s use of your Personal Data. The supervisory authority in the UK is the Information Commissioner’s Office (ICO) and more information can be found on the ICO’s website at https://ico.org.uk.
                    If you want to contact PVA about its use of your Personal Data, please write to Data Privacy Officer, Premier Vet Alliance Limited, The Quorum, Bond Street, Bristol, BS1 3AE.
                </p>
            </div>
            <Image width={150} height={150} alt="debit image" src="/images/Direct-Debit-Logo.png" />
            <div>
                <h2 className="sub-heading mb-4 text-2xl font-black">The Direct Debit Guarantee</h2>
                <ul className="list-disc list-inside">
                    <li className="text-lg mb-4">
                        This Guarantee is offered by all banks and building societies that accept instructions to pay Direct Debits.
                    </li>
                    <li className="text-lg mb-4">
                        If there are any changes to the amount, date or frequency of your Direct Debit, Premier Vet Alliance Ltd will notify you 3 working days in advance of your account being debited or as otherwise agreed. If you request Premier Vet Alliance Ltd to collect a payment, confirmation of the amount and date will be given to you at the time of the request.
                    </li>
                    <li className="text-lg mb-4">
                        If an error is made in the payment of your Direct Debit, by Premier Vet Alliance Ltd, or your bank or building society, you are entitled to a full and immediate refund of the amount paid from your bank or building society
                    </li>
                    <li className="text-lg mb-4">
                        If you receive a refund you are not entitled to, you must pay it back when Premier Vet Alliance Ltd asks you to.
                    </li>
                    <li className="text-lg mb-4">
                        You can cancel a Direct Debit at anytime by simply contacting your bank or building society. Written confirmation may be required. Please also notify us.
                    </li>
                </ul>
            </div>
        </section>
    );
}

import { CiClock2 } from "react-icons/ci";
import React from "react";
import Image from "next/image";
import { NeedMoreHelpSection } from "@/components/about-us";
import { NewsCard } from "@/components/widgets";

export default function NewsDetail() {
  return (
    <div className="container mx-auto">
      <section className="max-w-[846px] mx-auto flex flex-col gap-10 text-xl pt-6">
        <div className="flex justify-between items-center text-base">
          <div className="text-secondary">
            News{' '}/{' '}<span className="text-primary">5 Things You Need To Do In Your Practice!</span>
          </div>

          <div className="flex items-center text-secondary mb-5 sm:mb-6 gap-1">
            <CiClock2 className="text-base sm:text-xl" />
            <span className="text-sm sm:text-base">Jul 19, 2024 • 12 min read</span>
          </div>
        </div>

        <div className="sub-heading">
          5 Things You NEED To Do In Your Practice!
        </div>

        <Image className="w-full" src="/images/news-detail-top.png" alt="news-detail-top" width={846} height={500} />

        <div className="flex flex-col gap-4">
          <p>
            There’s certain things you need to do in your practice.
          </p>
          <p>
            These days pet owners have much more choice when it comes to choosing which veterinary practice is best for them and their pet. Many of us live a time poor life, with work and/or family taking so much time that we often struggle to fit in those tasks that need doing but inevitably slip down the list.
          </p>
          <p>
            You cannot change people’s busy lives, but you can make your practice easier and quicker to access and more attractive to busy pet owners, by providing an accessible, attractive and efficient experience. So, what do you need to do in your practice to make it the best choice in the area?
          </p>
        </div>


        <div>
          <div className="text-[32px] font-bold mb-5">In this article:</div>
          <div className="text-info font-semibold gap-4 flex flex-col border-l border-l-4 border-l-info pl-6 py-2">
            <p>Reputation is (nearly) everything!</p>
            <p>Online presence</p>
            <p>Accessibility</p>
            <p>Make it easy for owners to do the right things</p>
            <p>Keeping up appearances</p>
          </div>
        </div>

        <div>
          <div className="text-[32px] font-bold mb-5">Reputation is (nearly) everything!</div>
          <p>
            Do you have someone tasked with checking your Google reviews and replying to all feedback, positive and negative? With more people choosing services from information found online, it is important to spend some time on this. Try and encourage staff to ask clients to add a review because, not only will they bolster your reputation, they will improve your search rankings, helping to make your practice more visible in search results. This also helps you stand out from competitors and attract more potential pet owners.
          </p>
        </div>

        <div>
          <div className="text-[32px] font-bold mb-5">Online presence</div>
          <p>
            The quality of your website is now as vital a part of how you are seen as the look of your practice frontage. Potential and existing clients quickly make a judgement on a practice, depending on their experience of using the website. Make sure it is clean, modern and gives the information people are looking for without them having to spend time searching. Opening hours, services, how to book an appointment, contact details etc. should be easy to find. Make sure tabs are clearly labelled and are providing useful information. It is worth spending some time looking at other veterinary websites for inspiration and comparison.
          </p>
        </div>

        <div>
          <div className="text-[32px] font-bold mb-5">Accessibility</div>
          <p>
            Most practices outsource out of hours veterinary work, which is often not a blocker to a pet owner choosing you, however, what about the appointment making process? Make sure you have an online booking system on your website and a link to this on your socials. With over 40% of appointments being booked outside of veterinary surgery opening hours*, this is a particularly important part of the user experience for your current and prospective clients.
          </p>
        </div>

        <Image className="w-full" src="/images/news-detail-bottom.png" alt="news-detail-top" width={846} height={500} />

        <div>
          <div className="text-[32px] font-bold mb-5">Make it easy for owners to do the right things</div>
          <p>
            Make your healthcare plan visible both online and in reception and check that the content is still relevant to today’s clients. One of the biggest struggles for busy pet owners is remembering to keep on top of preventative measures like annual vaccinations, flea and worm treatments etc. Send regular reminders about upcoming boosters, provide a solution to many clients’ struggle to collect parasiticides during their busy life and, for those that have not joined your plan, make it easy for them to become a member online, from their home or workplace.
          </p>
        </div>

        <div>
          <div className="text-[32px] font-bold mb-5">Keeping up appearances</div>
          <p>
            Look around areas of your practice that pet owners may have access to, or better still, ask someone else to give you feedback on these spaces. The reception area should be well decorated, clean and odour free (where possible), with plenty of space and, if there’s room, separate cat and dog waiting areas. Passageways should be clear of equipment and products, all to give the impression of an organised, tidy and well-run practice.
          </p>
          <p>
            How people view your business is important, and creating a welcoming, easy to access service that clients appreciate and continue to use is crucial. There is so much consumer choice out there and with client loyalty no longer a given, it is important to make sure your practice stands out from the crowd.
          </p>
          <p>
            If you need help with any of the following, just click the button below to request more information.
          </p>
        </div>

        <div>
          <div className="text-[32px] font-bold mb-5">Conclusion</div>
          <p>
            Effective veterinary practice management requires a comprehensive approach that combines client focus, optimized business processes, and innovative solutions. By adhering to key principles, clinics can enhance animal health while building long-term relationships with clients.
          </p>

          <p>
            Here are some essential steps for achieving success:
          </p>

          <ul>
            <li>Build Client Relationships — Foster trust through regular communication and transparency in treatments.</li>
            <li>Embrace Innovation — Implement new technologies and preventative programs to stay ahead.</li>
            <li>Invest in Team Training — Ensure continuous staff development to improve client service.</li>
            <li>Optimize Processes — Streamline administrative and operational tasks for greater efficiency.</li>
            <li>Monitor Results — Regularly evaluate program effectiveness and feedback to drive ongoing improvements.</li>
          </ul>

          <p>
            Following these principles will help build a reliable, successful, and sustainable veterinary practice that clients value.
          </p>
        </div>
      </section>

      <section className="pt-20">
        <div className="sub-heading mb-12">
          You Might <span className="text-primary">Also Like</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard
            image="new-chart.png"
            time="Sep 18, 2024"
            title="Gen X and Millennials are Ruling the Roost!"
            description="The highest percentage of today’s new pet owners belong to the Gen X and Millennials. Are you targeting them?"
          />
          <NewsCard
            image="new-talking.png"
            time="Sep 18, 2024"
            title="Home Delivery – Why Are We Still Talking About It?!"
            description="Owners who must collect products from their surgery stay on plan 22 fewer months than those who have a post option. Don’t let this be you."
          />
          <NewsCard
            image="new-cat-dot.png"
            time="Sep 18, 2024"
            title="Can You Guess the Top Cat and Dog Names in 2024?"
            description="What are the three most common cat and dog names in 2024? We check them out and see how the PVA team’s guesses compare to the average."
          />
        </div>
      </section>

      <section className="-mx-10">
        <NeedMoreHelpSection />
      </section>
    </div>
  )
}

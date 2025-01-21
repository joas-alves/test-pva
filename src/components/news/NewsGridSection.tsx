import { NewsCard } from "@/components/widgets";
import { INewsPage } from "@/cms-models/news";
import React from "react";

type Props = {
  data: INewsPage[];
}

export const NewsGridSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
        {data?.map((item, index) => (
          <NewsCard
            key={index}
            id={item.id}
            image={item.image}
            time={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

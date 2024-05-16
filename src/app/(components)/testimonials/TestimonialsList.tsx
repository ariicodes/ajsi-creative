export interface Testimonial {
  name: string;
  testimonial: string;
  titleAndCompany: string;
}

const TestimonialsList = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  return (
    <div className="flex flex-col gap-5 p-7 xl:flex xl:min-h-[560px] xl:flex-col xl:items-center xl:justify-around">
      {testimonials &&
        testimonials.map((testimonial, index) => (
          <div key={index} className="xl:w-[735px]">
            <p className="text-[0.9rem] font-semibold uppercase text-cordovan xl:text-base">
              &quot;{testimonial.testimonial}&quot;
            </p>
            <p className="text-sm text-gunmetal">
              - {testimonial.name}, {testimonial.titleAndCompany}
            </p>
          </div>
        ))}
    </div>
  );
};

export default TestimonialsList;

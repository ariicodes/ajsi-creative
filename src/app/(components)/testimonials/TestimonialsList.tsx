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
    <div className="flex flex-col gap-5 p-7">
      {testimonials &&
        testimonials.map((testimonial, index) => (
          <div key={index}>
            <p className="text-[0.9rem] font-semibold uppercase text-cordovan">
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

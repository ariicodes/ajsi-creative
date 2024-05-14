import Heading from "../(components)/Heading";
import MainCTA from "../(components)/MainCTA";
import SubscriptionForm from "../(components)/SubscriptionForm";
import TestimonialsList from "../(components)/testimonials/TestimonialsList";

const testimonials = [
  {
    name: "Sarah T.",
    testimonial:
      "AJSI elevated our brand to new heights! Their UI design expertise transformed our website into a sleek and user-friendly platform. Their attention to detail and creative approach truly set them apart",
    titleAndCompany: "CEO of TechNova Solutions",
  },
  {
    name: "John P.",
    testimonial:
      "Working with AJSI was a game-changer for our startup. From logo design to full brand identity development, they captured the essence of our company perfectly. Their graphic design work exceeded our expectations and helped us stand out in a crowded market.",
    titleAndCompany: "Co-founder of LaunchPad Innovations",
  },
  {
    name: "Emily L.",
    testimonial:
      "AJSI's photography services brought our products to life! Their team has a keen eye for capturing the essence of our brand, and the quality of their work is unparalleled. They're our go-to agency for all things visual",
    titleAndCompany: "Marketing Director at Luxe Home Decor",
  },
];

export default function Testimonials() {
  return (
    <div>
      <Heading header="Testimonials" />
      <TestimonialsList testimonials={testimonials} />
      <SubscriptionForm />
      <MainCTA />
    </div>
  );
}

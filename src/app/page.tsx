import HeroSection from "./(components)/home/HeroSection";
import MainCTA from "./(components)/MainCTA";
import SubscriptionForm from "./(components)/SubscriptionForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SubscriptionForm />
      <MainCTA />
    </main>
  );
}

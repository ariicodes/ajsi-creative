interface Question {
  _id: number;
  question: string;
  answer: string;
}

const FAQList = ({ faqs }: { faqs?: Question[] }) => {
  return (
    <div className="xl:flex xl:flex-col xl:items-center">
      <div className="px-10 text-gunmetal xl:px-80">
        <ol className="list-outside list-decimal py-8">
          {faqs &&
            faqs.map((faq) => (
              <li key={faq._id} className="pb-2">
                <h2 className="font-serif text-sm xl:text-base">
                  {faq.question}
                </h2>
                <p className="text-xs xl:text-sm">{faq.answer}</p>
              </li>
            ))}
        </ol>
        <p className="-mt-8 text-[10px] font-semibold text-cordovan xl:text-xs">
          email: info@ajsicreative.com | phone: (202) 670-9777
        </p>
        <p className="text-x mt-2 pb-10 xl:text-sm">
          We&apos;re eager to discuss your project goals and explore how we can
          help bring your vision to fruition.
        </p>
      </div>
    </div>
  );
};

export default FAQList;

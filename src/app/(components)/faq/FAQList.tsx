interface Question {
  _id: number;
  question: string;
  answer: string;
}

const FAQList = ({ faqs }: { faqs?: Question[] }) => {
  return (
    <div className="px-10 text-gunmetal">
      <ol className="list-outside list-decimal py-6">
        {faqs &&
          faqs.map((faq) => (
            <li key={faq._id} className="pb-2">
              <h2 className="font-serif text-sm">{faq.question}</h2>
              <p className="text-xs">{faq.answer}</p>
            </li>
          ))}
      </ol>
      <p className="-mt-8 text-[10px] font-semibold text-cordovan">
        email: info@ajsicreative.com | phone: (202) 670-9777
      </p>
      <p className="mt-2 pb-10 text-xs">
        We&apos;re eager to discuss your project goals and explore how we can
        help bring your vision to fruition.
      </p>
    </div>
  );
};

export default FAQList;

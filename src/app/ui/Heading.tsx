export default function Heading({ header }: { header: string }) {
  return (
    <div className="h-[70px] bg-gunmetal text-center font-serif text-[30px] font-black text-white flex flex-row justify-center items-center uppercase">
      <h1>{header}</h1>
    </div>
  );
}

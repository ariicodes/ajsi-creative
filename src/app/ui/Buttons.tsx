"use client";
import { useRouter } from "next/navigation";

interface BtnProps {
  content: string;
  route?: string;
}

export const DarkActionBtn = ({ content, route }: BtnProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => route && router.push(route)}
      className="h-7 w-40 bg-gunmetal pb-0.5 text-center font-serif text-base font-black text-white"
    >
      {content}
    </button>
  );
};

export const SubmitBtn = ({ content }: { content: string }) => {
  return (
    <button
      type="submit"
      className="h-7 w-40 bg-cordovan pb-0.5 text-center font-serif text-base font-black text-white"
    >
      {content}
    </button>
  );
};

export const LightActionBtn = ({ content, route }: BtnProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => route && router.push(route)}
      className="h-7 w-40 bg-almond pb-0.5 text-center font-serif text-base font-black text-gunmetal"
    >
      {content}
    </button>
  );
};

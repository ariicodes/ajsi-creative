interface DarkActionBtnProps {
  content: string;
  onClick: () => void; // Function that takes no arguments and returns nothing (void)
}

export const DarkActionBtn = ({ content, onClick }: DarkActionBtnProps) => {
  return (
    <button
      onClick={onClick}
      className="h-7 w-40 bg-gunmetal pb-0.5 text-center font-black text-white"
    >
      {content}
    </button>
  );
};

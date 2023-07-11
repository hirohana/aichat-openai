type Props = {
  name: string;
  onClick?: () => void;
};

function TertiaryButton({ name, onClick }: Props) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white mt-4 sm:mt-0 py-2 px-4 border border-red-500 hover:border-transparent rounded"
      >
        {name}
      </button>
    </div>
  );
}

export { TertiaryButton };

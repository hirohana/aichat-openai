type Props = {
  name: string;
  onClick?: () => void;
};

function PrimaryButton({ name, onClick }: Props) {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full py-2 font-semibold text-white hover:text-blue-700 bg-blue-300 hover:bg-transparent border hover:border-blue-500 border-transparent rounded"
      >
        {name}
      </button>
    </div>
  );
}

export { PrimaryButton };

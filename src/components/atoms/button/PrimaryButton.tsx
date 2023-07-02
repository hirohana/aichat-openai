type Props = {
  name: string;
  onClick?: () => void;
};

function PrimaryButton({ name, onClick }: Props) {
  return (
    <div>
      <button
        onClick={onClick}
        className="py-2 px-4 font-semibold text-white hover:text-blue-700 bg-blue-500 hover:bg-transparent border hover:border-blue-500 border-transparent rounded"
      >
        {name}
      </button>
    </div>
  );
}

export { PrimaryButton };

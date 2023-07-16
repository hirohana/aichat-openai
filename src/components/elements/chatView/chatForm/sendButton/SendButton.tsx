type Props = {
  name: string;
  onClick?: () => void;
};

function SendButton({ name, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="block w-full max-w-sm sm:w-24 py-2 font-semibold text-white hover:text-blue-700 bg-blue-300 hover:bg-transparent border hover:border-blue-500 border-transparent rounded"
    >
      {name}
    </button>
  );
}

export { SendButton };

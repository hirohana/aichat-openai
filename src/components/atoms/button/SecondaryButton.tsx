type Props = {
  name: string;
  onClick?: () => void;
};

function SecondaryButton({ name, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      {name}
    </button>
  );
}

export { SecondaryButton };

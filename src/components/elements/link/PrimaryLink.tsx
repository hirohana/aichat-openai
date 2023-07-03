import Link from "next/link";

type Props = {
  name: string;
  href: string;
};

function PrimaryLink({ name, href }: Props) {
  return (
    <Link
      href={href}
      className="py-2 px-4 font-semibold text-white hover:text-blue-700 bg-blue-500 hover:bg-transparent border hover:border-blue-500 border-transparent rounded"
    >
      {name}
    </Link>
  );
}

export { PrimaryLink };

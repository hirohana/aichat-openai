export default async function ChatDetail({
  params,
}: {
  params: { slug: string };
}) {
  const slug = await fetch(`http://localhost:3000/api/chat/${params.slug}`, {
    cache: "no-cache",
  });
  return <div>detail</div>;
}

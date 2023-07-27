export async function ChatSlug({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  await fetch(`http://localhost:3000/api/chat/${slug}`, {
    cache: "no-cache",
  });
  return <div>detail</div>;
}

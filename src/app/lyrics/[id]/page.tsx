export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div className="container mx-auto p-4">
      <h2>My slug is: {id}</h2>
    </div>
  );
}

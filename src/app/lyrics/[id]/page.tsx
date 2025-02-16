export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  
  return (
    <div className="container">
      <div>My id is: {id}</div>
    </div>
  );
}

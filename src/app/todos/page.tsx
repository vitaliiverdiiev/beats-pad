import { getData } from "@/shared/actions";
import { Todos } from "@/shared/components";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}

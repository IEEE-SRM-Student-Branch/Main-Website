import { getCorp } from "@/sanity/utils/fetchData";
import Image from "next/image";

export default async function Home() {
  const corp = await getCorp();
  return <div>Hello guys im dead</div>;
}

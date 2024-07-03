import BecomeanInvestor from "@/pageSections/Home/BecomeanInvestor";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push("/fragg-nigeria")
  })
  return (
    <main>
    </main>
  );
}

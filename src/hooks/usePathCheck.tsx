// hooks/usePathCheck.ts
import {usePathname} from "next/navigation";

interface PathCheck {
  isFraggNigeria: boolean;
  isFraggGmbh: boolean;
  isFraggSarl: boolean;
}

const usePathCheck = (): PathCheck => {
  const pathname = usePathname();

  const isFraggNigeria = pathname.includes("fragg-nigeria");
  const isFraggGmbh = pathname.includes("fragg-gmbh");
  const isFraggSarl = pathname.includes("fragg-sarl");

  return {isFraggNigeria, isFraggGmbh, isFraggSarl};
};

export default usePathCheck;

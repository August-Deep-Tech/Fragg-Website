// components/PathBasedNav.tsx
import Link from "next/link";
import usePathCheck from "../hooks/usePathCheck";

const PathBasedNav: React.FC = () => {
  const {isFraggNigeria, isFraggGmbh, isFraggSarl} = usePathCheck();

  if (isFraggNigeria || isFraggGmbh) {
    const basePath = isFraggNigeria ? "/fragg-nigeria" : "/fragg-gmbh";
    return (
      <nav className="hidden md:flex items-center space-x-16">
        <Link
          href={`${basePath}/about`}
          className="text-greyish-10 hover:text-black"
        >
          About Us
        </Link>
        <Link
          href={`${basePath}/fragg-group`}
          className="text-greyish-10 hover:text-black"
        >
          FRAGG Group
        </Link>
        <Link
          href={`${basePath}/services`}
          className="text-greyish-10 hover:text-black"
        >
          Our Services
        </Link>
        <Link
          href={`${basePath}//impact-and-sustainability`}
          className="text-greyish-10 hover:text-black"
        >
          Impact and Sustainability
        </Link>
        <Link
          href={`${basePath}/advisory`}
          className="text-greyish-10 hover:text-black"
        >
          Advisory
        </Link>
      </nav>
    );
  }

  if (isFraggSarl) {
    return (
      <nav className="hidden md:flex items-center space-x-16">
        <Link
          href="/fragg-sarl/about"
          className="text-greyish-10 hover:text-black"
        >
          About Us
        </Link>
        <Link
          href="/fragg-sarl/fragg-group"
          className="text-greyish-10 hover:text-black"
        >
          FRAGG Group
        </Link>
        <Link
          href="/fragg-sarl/services"
          className="text-greyish-10 hover:text-black"
        >
          Our Services
        </Link>
        <Link
          href="/fragg-sarl/funds"
          className="text-greyish-10 hover:text-black"
        >
          Funds
        </Link>
      </nav>
    );
  }

  return null;
};

export default PathBasedNav;

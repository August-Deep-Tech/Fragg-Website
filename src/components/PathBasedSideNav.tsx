// components/PathBasedNav.tsx
import Link from "next/link";
import usePathCheck from "../hooks/usePathCheck";

interface PathBasedSideNavProps {
  toggleMenu: () => void;
}

const PathBasedSideNav: React.FC<PathBasedSideNavProps> = ({toggleMenu}) => {
  const {isFraggNigeria, isFraggGmbh, isFraggSarl} = usePathCheck();

  if (isFraggNigeria || isFraggGmbh) {
    const basePath = isFraggNigeria ? "/fragg-nigeria" : "/fragg-gmbh";
    return (
      <nav className="flex flex-col items-center space-y-6 py-4">
        <Link
          href={`${basePath}/about`}
          className="text-greyish-10 hover:text-black"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          href={`${basePath}/fragg-group`}
          className="text-greyish-10 hover:text-black"
          onClick={toggleMenu}
        >
          FRAGG Group
        </Link>
        <Link
          href={`${basePath}/services`}
          className="text-greyish-10 hover:text-black"
          onClick={toggleMenu}
        >
          Our Services
        </Link>
        <Link
          href={`${basePath}/impact-and-sustainability`}
          className="text-greyish-10 hover:text-black"
          onClick={toggleMenu}
        >
          Impact and Sustainability
        </Link>
        <Link
          href={`${basePath}/advisory`}
          className="text-greyish-10 hover:text-black"
          onClick={toggleMenu}
        >
          Advisory
        </Link>
        <button className="bg-redish-20 text-white px-6 py-2 rounded-full hover:bg-redish-10">
          Start Investing
        </button>
      </nav>
    );
  }

  if (isFraggSarl) {
    return (
      <nav className="flex flex-col items-center space-y-6 py-4">
        <Link
          href="/fragg-sarl/about"
          className="text-greyish-10 hover:text-black"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          href="/fragg-sarl/fragg-group"
          className="text-greyish-10 hover:text-black"
          onClick={toggleMenu}
        >
          FRAGG Group
        </Link>
        <Link
          href="/fragg-sarl/services"
          className="text-greyish-10 hover:text-black"
          onClick={toggleMenu}
        >
          Our Services
        </Link>
        <Link
          href="/fragg-sarl/funds"
          className="text-greyish-10 hover:text-black"
          onClick={toggleMenu}
        >
          Funds
        </Link>

        <button className="bg-redish-20 text-white px-6 py-2 rounded-full hover:bg-redish-10">
          Start Investing
        </button>
      </nav>
    );
  }

  return null;
};

export default PathBasedSideNav;

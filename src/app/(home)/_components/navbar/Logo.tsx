import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-orange-600 text-2xl font-bold">
      <span className="md:hidden">LH</span>
      <span className="md:block hidden">LaunchHub</span>
    </Link>
  );
};

export default Logo;

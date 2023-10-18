import Link from "next/link";

const LogoBar = () => {
  return (
    <div className="flex items-center mx-auto lg:ml-4 font-gothicA1">
      <Link href="/">
        <img
          src="/icon-easylist.svg"
          alt="logo icon"
          className="w-7 h-7 mr-4 md:mr-6"
        />
      </Link>
      <p className="font-bold tracking-widest mr-2 text-2xl">KEIO</p>
      <p className="font-extralight tracking-widest text-2xl">EASYLIST</p>
    </div>
  );
};

export default LogoBar;

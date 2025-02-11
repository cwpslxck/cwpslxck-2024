import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex w-full justify-center items-center fixed z-40 top-3">
      <ul className="flex gap-1 p-0.5 border-white/20 rounded-full border bg-white/20 backdrop-blur">
        <li className="header-item text-white/80 hover:text-white hover:bg-white/20">
          <Link href="/">Home</Link>
        </li>
        <li className="header-item text-white/80 hover:text-white hover:bg-white/20">
          <Link href="/#projects">Projects</Link>
        </li>
        <li className="header-item text-white/80 hover:text-white hover:bg-white/20">
          <Link href="/design">Designs</Link>
        </li>
        <li className="header-item bg-white text-black hover:bg-white/70">
          <Link href="https://cwpslxck.t.me">Telegram</Link>
        </li>
      </ul>
    </div>
  );
};

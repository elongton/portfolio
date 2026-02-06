import Link from "next/link";

export const Menu = () => {
  return (
    <nav className="text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
      <div>
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/who-i-am">Who I am</Link>
          </li>
          <li>
            <Link href="/how-i-think">How I think</Link>
          </li>
          <li>
            <Link href="/what-i-do">What I do</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">
          Resume
        </button>
      </div>
      </div>
    </nav>
  );
};

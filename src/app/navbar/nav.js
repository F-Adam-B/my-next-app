import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/dashboard/about">About</Link>
        </li>

        <li>
          <Link href="/dashboard/contact">Contact</Link>
        </li>
        <li>
          <Link href="/dashboard/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

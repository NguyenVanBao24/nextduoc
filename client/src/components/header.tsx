import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <div className="flex gap-4">
      <ul>
        <li>
          <Link href="/login">Đăng nhập</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/register">Đăng kí</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/mee">Profile</Link>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
};

export default Header;

import Link from "next/link"
import { IoLogInOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <nav className="bg-zinc-700 text-white px-2 h-14 flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 className="text-lg font-semibold">Expense Tracker</h1>
          </Link>
        </div>
        <div>
          <Link 
            className="flex items-center gap-1 text-lg"
            href="/login">
            <IoLogInOutline
              className="text-2xl"
              />
            Login
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
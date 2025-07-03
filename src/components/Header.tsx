import Link from "next/link"
import { IoLogInOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <nav className="bg-zinc-700 text-white px-2 h-14 flex justify-between items-center md:h-24 md:px-8">
        <div>
          <Link href="/">
            <h1 className="text-lg font-semibold md:text-4xl">Expense Tracker</h1>
          </Link>
        </div>
        <div>
          <Link 
            className="flex items-center gap-1 text-lg md:text-3xl md:font-semibold"
            href="/login">
            <IoLogInOutline
              className="text-2xl md:text-4xl"
              />
            Login
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
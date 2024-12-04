import { IoSearchOutline } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import Logo from "../../components/logo.png";
import { ModeToggle } from "./mode-toggle";

function Header() {
  return (
    <div>
    <div className='flex py-3 z-10 fixed px-16 -top-1 w-full'>
      <div className="flex justify-between gap-80">
      <div className='flex items-center gap-5'>
        <div className="flex gap-2 items-center">
          <button className='flex items-center gap-2'>
          <img className='w-11 mt-2' src={Logo} alt="" />
          <h1 className='font-bold text-3xl'>IT HOUSE</h1>
          </button>
        </div>
      <ul className='flex gap-3 items-center font-bold'>
        <li className='text-blue-600'>Bosh sahifa</li>
        <li className='hover:text-blue-600 transition'>Kurslar</li>
        <li className='hover:text-blue-600 transition'>Treyding</li>
        <li className='hover:text-blue-600 transition'>Aloqa</li>
      </ul>
      </div>
      <div className="flex gap-2 items-center">
        <button className='bg-none border-none text-2xl p-2 hover:bg-gray-100 rounded-lg'><IoSearchOutline /></button>
        <button className='bg-none border-none text-2xl p-2 hover:bg-gray-100 rounded-lg'><LuLanguages /></button>
        <button className='bg-none border-none text-2xl p-2 hover:bg-gray-100 rounded-lg'><FiBell /></button>
        <button className='bg-none border-none text-2xl p-2 hover:bg-gray-100 rounded-lg'><SlBasket /></button>
        <button><ModeToggle /></button>
        <button className='bg-red-500 text-white py-3 px-9 rounded-3xl'>Kirish</button>
      </div>
      </div>
    </div>
   
    </div>
  )
}

export default Header
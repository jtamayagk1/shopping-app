import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-gray-800 p-4 flex justify-end'>
      <ul className='flex space-x-4 mx-6'>
        <li className='navItem'>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className='navItem'>
          <Link href="/cart">
            Cart
          </Link>
        </li>
        <li className='navItem'>
          <Link href="/admin">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};


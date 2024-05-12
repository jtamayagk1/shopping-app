'use client'

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navbar() {
  const {user} = useUser()

  return (
    <nav className='bg-gray-800 p-4 mb-4 flex justify-end'>
      <ul className='flex space-x-4 mx-6'>
        <li className='navItem'>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className='navItem'>
          <Link href="/items">
            Shop
          </Link>
        </li>
        {user && (
          <li className='navItem'>
            <Link href="/cart">
              Cart
            </Link>
          </li>
        )}
        {user && (
          <li className='navItem'>
            <Link href="/profile">
              Profile
            </Link>
          </li>
        )}
        {user && (
          <li className='navItem'>
            <Link href="/admin">
              Admin
            </Link>
          </li>
        )}
        {!user && (
          <>
            <li className='navItem'>
              <Link href="/api/auth/login">
                Login
              </Link>
            </li>
            <li className='navItem'>
              <Link href="/api/auth/signup">
                Sign Up
              </Link>
            </li>
          </>
        )}
        {user && (
          <li className='navItem'>
            <Link href="/api/auth/logout">
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};


'use client';

import { Link } from 'react-scroll';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="logo-container">
      <div className="logo-wrapper">
        <Link to="home" smooth={true} duration={500}>
          <Image
            src="/foto1.png"
            alt="Kota Cloud Logo"
            width={100}
            height={100}
            className="animate__animated animate__pulse animate__infinite animate__slow"
            style={{
              display: 'block',
            }}
          />
        </Link>
      </div>
    </header>
  );
}
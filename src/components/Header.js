'use client';

import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header
      data-header="fixed"
      style={{
        position: 'fixed !important',
        top: '0 !important',
        left: '0 !important',
        width: '100% !important',
        background: 'transparent !important',
        zIndex: '100000 !important',
        padding: '1rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none !important',
        border: 'none !important',
      }}
    >
      <div
        style={{
          background: '#FFFFFF',
          padding: '10px',
          borderRadius: '9999px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '120px',
        }}
      >
        <Link to="home" smooth={true} duration={500}>
          <img
            src="/Logo.png"
            alt="Kota Cloud Logo"
            width={100}
            height={100}
            className="animate__animated animate__pulse animate__infinite animate__slow"
            style={{ display: 'block', position: 'static' }}
          />
        </Link>
      </div>
    </header>
  );
}
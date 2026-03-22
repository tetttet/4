import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <Link href="/">Главная</Link>
      <br />
      <Link href="/about">О нас</Link>
      <br />
      <Link href="/service">Сервис</Link>
      <br />
      <Link href="/game">Игра</Link>
    </div>
  );
};

export default Header;

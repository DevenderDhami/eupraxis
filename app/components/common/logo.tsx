import Image from "next/image";
import React from "react";
import logoImg from "@/public/assets/eupraxis_logo1.png"
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={logoImg}
        alt={"Logo"}
        width={100}
        height={100}
        className="inline-block "
      />
    </Link>
  );
};

export default Logo;

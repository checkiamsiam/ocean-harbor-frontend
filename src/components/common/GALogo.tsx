import Image from "next/image";
import Link from "next/link";

const GALogo = ({ width = 140, height = 53 }: { width?: number; height?: number }) => {
  return (
    <div>
      <Link href="/">
        <Image src="/img/GOLDEN-ANCHOR-PNG-LOGO.png" alt="golden anchor logo" width={width} height={height} />
      </Link>
    </div>
  );
};

export default GALogo;

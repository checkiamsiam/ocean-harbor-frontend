import { Link } from "@/lib/router-events";
import Image from "next/image";

const OHLogo = ({ width = 100, height = 100 }: { width?: number; height?: number }) => {
  return (
    <div>
      <Link href="/">
        <Image src="/img/ocean-harbor-logo.png" alt="ocean harbor logo" width={width} height={height} />
      </Link>
    </div>
  );
};

export default OHLogo;

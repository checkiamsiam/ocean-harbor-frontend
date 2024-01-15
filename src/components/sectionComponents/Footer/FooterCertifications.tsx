import { Link } from "@/lib/router-events";
import Image from "next/image";

const FooterCertifications = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="capitalize text-primary font-bold">CERTIFICATIONS</p>
        <div className="flex gap-2 flex-wrap">
          <Link href="/">
            <Image src="/img/certificate-1.png" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
          <Link href="/">
            <Image src="/img/certificate-2.png" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
          <Link href="/">
            <Image src="/img/certificate-3.png" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
          <Link href="/">
            <Image src="/img/certificate-4.png" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
          <Link href="/">
            <Image src="/img/certificate-5.png" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
          <Link href="/">
            <Image src="/img/certificate-6.png" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCertifications;

import Image from "next/image";
import Link from "next/link";

const FooterCertifications = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="uppercase text-primary font-bold">Certifications</p>
        <div className="flex gap-2 flex-wrap">
          <Link href="/">
            <Image src="/img/goldenanchorlogodemo.jpeg" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
          <Link href="/">
            <Image src="/img/goldenanchorlogodemo.jpeg" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
          <Link href="/">
            <Image src="/img/goldenanchorlogodemo.jpeg" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
          <Link href="/">
            <Image src="/img/goldenanchorlogodemo.jpeg" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
          <Link href="/">
            <Image src="/img/goldenanchorlogodemo.jpeg" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
          <Link href="/">
            <Image src="/img/goldenanchorlogodemo.jpeg" alt="iso" width={70} height={70} className="rounded-md" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCertifications;

import Image from "next/image";
import logoIcon from "$/logo.svg";

export const Logo = () => {
  return (
    <div className="flex items-center relative">
      <h2 className="text-xl font-bold">
        beats.p<span className="text-white">ad.</span>
      </h2>
      <Image
        src={logoIcon}
        width={42}
        height={42}
        alt="Logo. Blob."
        className="relative -left-[36px] -z-10"
      />
    </div>
  );
};

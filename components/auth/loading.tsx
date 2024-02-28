import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={50}
        height={50}
        className="animate-pulse duration-500"
      />
    </div>
  );
};
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Page for authenticated users only
      <div>
        <UserButton/>
      </div>
    </div>
  );
}

import MarigoldImage from "../../../public/Marigold.png";
import Image from "next/image";
export default function MarigoldSection(): React.ReactElement {
  return (
    <div className="w-screen min-h-screen relative overflow-hidden bg-whiteshade">
      <div className="w-full h-screen sticky  ">
        <Image
          src={MarigoldImage}
          alt="phool"
          width={400}
          height={400}
          className="top-1/2 absolute left-0"
        />
        <Image
          src={MarigoldImage}
          alt="phool"
          width={400}
          height={400}
          className="top-1/2 absolute right-0"
        />
      </div>
    </div>
  );
}

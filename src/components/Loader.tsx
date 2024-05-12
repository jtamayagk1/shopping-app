import React from "react";
import Image from "next/image";
import { BsYinYang } from "react-icons/bs";

// export const PageLoader: React.FC = () => {
//   return (
//     <div className="flex h-screen justify-center items-center">
//       <BsYinYang size={50} />
//     </div>
//   );
// };

export default function Loader() {
  return (
    <div className="flex flex-col h-screen justify-center items-center space-y-4">
      <BsYinYang size={75} className="animate-spin" />
      <h1>Loading...</h1>
    </div>
  );
}
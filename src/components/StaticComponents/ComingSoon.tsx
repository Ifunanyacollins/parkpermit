import Image from "next/image";
import React from "react";

function ComingSoon() {
  return (
    <div className="h-full">
      <Image src="/soon.png" layout="intrinsic" width={600} height={400} />
    </div>
  );
}

export default ComingSoon;

import React, { useState } from "react";
import FacultySelector from "@/src/components/parts/rakutan/FacultySelector";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import LangAndSpecializedTab from "@/src/components/parts/rakutan/specialized/LangAndSpecializedTab";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Specialized = () => {
  const [selected, setSelected] = useState<string>("第二外国語");
  return (
    <div className="outlineStyle">
      <h2 className="my-12 font-semibold text-center text-3xl">専門科目</h2>
      <Image
        src="/world.svg"
        alt="world"
        width={860.13137}
        height={571.14799}
        className="w-[280px] md:w-[400px] pointer-events-none block mx-auto"
        priority
      />
      <LangAndSpecializedTab />
    </div>
  );
};

export default Specialized;

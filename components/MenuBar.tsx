"use client";
import { menuList } from "@/constants";
import scrollIntoView from "@/utils/helperFuntion";
import { useState } from "react";

export default function MenuBar() {
  const [activeSection, setActiveSection] = useState(1);
  const handleClickOnMenuList = (item: {
    id: number;
    name: string;
    key: string;
  }) => {
    setActiveSection(item?.id);
    scrollIntoView({
      sectionName: item?.key,
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {menuList?.map((item) => (
        <div
          key={item?.id}
          className="sectionContainerTitle"
          onClick={() => handleClickOnMenuList(item)}
        >
          <div
            className={
              activeSection === item?.id
                ? "activeHorizontalLine"
                : "horizontalLine"
            }
          ></div>
          <span
            className={
              activeSection === item?.id
                ? "activeMenuItemText tracking-wider"
                : "menuItemText tracking-wider"
            }
          >
            {item?.name}
          </span>
        </div>
      ))}
    </div>
  );
}

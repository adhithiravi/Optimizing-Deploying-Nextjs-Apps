"use client";

import dynamic from "next/dynamic";

const NavigationBar = dynamic(() => import("./Navigation"), {
  ssr: false,
});

export default function NavigationWrapper() {
  return <NavigationBar />;
}

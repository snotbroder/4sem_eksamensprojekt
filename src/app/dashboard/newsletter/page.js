"use client";
import { useEffect } from "react";

import { storeSelectedNavigation } from "@/stores/storeSelectedNavigation";
import Dashboard_pageName from "@/components/dashboard/Dashboard_pageName";

export default function menusPage() {
  const setSelected = storeSelectedNavigation((state) => state.setStoreSelectedNavigation); // always called

  useEffect(() => {
    setSelected("newsletter");
  }, [setSelected]); // safe because this hook always runs now

  return (
    <>
      <Dashboard_pageName text="newsletter" />
    </>
  );
}

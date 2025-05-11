"use client";
import { useEffect } from "react";

import { storeSelectedNavigation } from "@/stores/storeSelectedNavigation";
import Dashboard_pageName from "@/app/dashboard_components/Dashboard_pageName";

export default function menusPage() {
  const setSelected = storeSelectedNavigation((state) => state.setStoreSelectedNavigation); // always called

  useEffect(() => {
    setSelected("bookings");
  }, [setSelected]); // safe because this hook always runs now

  return (
    <>
      <Dashboard_pageName text="bookings" />
    </>
  );
}

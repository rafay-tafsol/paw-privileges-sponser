import OfferDetails from "@/component/templates/dashboard/OfferDetails/OfferDetails";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OfferDetails />
    </Suspense>
  );
}

"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <Cal
      namespace="premier-echange"
      calLink="advisia/premier-echange"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}

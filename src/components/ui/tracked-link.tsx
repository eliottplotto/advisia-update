"use client";

import Link from "next/link";
import { forwardRef } from "react";
import type { ComponentProps, MouseEvent } from "react";
import { trackCTAClick, trackBookingClick } from "@/lib/analytics";

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  trackingLabel: string;
  trackingPage: string;
  isBooking?: boolean;
}

const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  function TrackedLink(
    { trackingLabel, trackingPage, isBooking, onClick, ...props },
    ref
  ) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      trackCTAClick(trackingLabel, trackingPage);
      if (isBooking) trackBookingClick();
      if (typeof onClick === "function") {
        (onClick as (e: MouseEvent<HTMLAnchorElement>) => void)(e);
      }
    };

    return <Link ref={ref} onClick={handleClick} {...props} />;
  }
);

TrackedLink.displayName = "TrackedLink";
export default TrackedLink;

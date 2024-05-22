"use client";

import { useEffect } from "react";
import Heading from "../(components)/Heading";

const Booking = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Heading header="Booking" />
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/ajsicreative/free-consulation?text_color=113744&primary_color=843d3b"
        style={{ minWidth: 320, height: 700 }}
      ></div>
    </div>
  );
};

export default Booking;

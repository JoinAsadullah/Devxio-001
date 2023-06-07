import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="2.3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

export default function MenuToggle({ toggle }){
    return(
    <button type="button" onClick={toggle} className="mx-[auto] outline-none buttonreset">
        <svg width="27" height="23" viewBox="0 0 22 23">
        <Path
            variants={{
            closed: { d: "M 3 8 L 20 8" },
            open: { d: "M 3 16.5 L 17 2.5" }
            }}
        />

        <Path
            variants={{
            closed: { d: "M -1 15.346 L 20 15.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
            }}
        />
        </svg>
    </button>
)};

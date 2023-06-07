import {useInView} from "framer-motion";
import {useRef} from 'react';

export default function Section(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "1px 0px -10px 0px", once: false,amount: 'some' });
  
    return (
      <props.element ref={ref}  className={props.className} onClick={props.onClick}>
        <span className={props.spanClassName}
        style= {{
         transform : isInView ? "Scale(1)" : "Scale(.5) ",
         opacity: isInView ? 1 : 0, 
         transition: "all 0.4s ease-in-out 0.1s",
         height: '100%',
         width: '100%'
        }}
        >
        {props.children}
        </span>
      </props.element >
    );
  }
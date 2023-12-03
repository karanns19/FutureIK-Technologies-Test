import React, { useRef, useLayoutEffect } from "react";
import { status } from "./constants";

export default function Checkbox(props) {
  const { indeterminate, checked, id, compute, ...rest } = props;
  const inputRef = useRef(null);

  // Handle Checkbox - Status of Input Checkbox

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
      inputRef.current.checked = checked;
    }
  }, [indeterminate, checked]);

  return (
    <input
      {...rest}
      ref={inputRef}
      type="checkbox"
      className="cursor-pointer"
      onChange={() => {
        const newStatus = inputRef.current.checked
          ? status.checked
          : status.unchecked;
        compute(id, newStatus);
      }}
    />
  );
}

"use client";
import React, { useState } from "react";

const Check = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex gap-4" >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="checkbox checkbox-primary"
      />
      <p className="mt-2">
       Sign in to your account
      </p>
    </div>
  );
};

export default Check;

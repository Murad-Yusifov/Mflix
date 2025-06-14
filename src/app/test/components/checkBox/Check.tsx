"use client";
import React from "react";

const Check = () => {
  return (
    <div className="flex gap-4" >
      <input
        type="checkbox"
        className=" checkbox-xl sm:checkbox checkbox-primary"
      />
      <p className="mt-2">
       Sign in to your account
      </p>
    </div>
  );
};

export default Check;

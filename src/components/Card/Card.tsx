import React from "react";

interface Props {
  children?: React.ReactChild
}

export default function Card({ children }:Props){
  return (
    <div>
      {children}
    </div>
  )
}
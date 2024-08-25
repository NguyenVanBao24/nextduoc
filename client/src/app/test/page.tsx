import React from "react";
import { useAppContext } from "../app-provider";

export default function page() {
  const { sessionToken } = useAppContext();

  return <div>{sessionToken}</div>;
}

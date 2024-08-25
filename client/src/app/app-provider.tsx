"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({
  sessionToken: "",
  setSessionToken: (sessionToken: string) => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be uesd within an AppProvider");
  }
  return context;
};

export default function AppProvider({
  children,
  initTialsessionToken = "",
}: {
  children: React.ReactNode;
  initTialsessionToken?: string;
}) {
  const [sessionToken, setSessionToken] = useState(initTialsessionToken);

  return (
    <AppContext.Provider value={{ sessionToken, setSessionToken }}>{children}</AppContext.Provider>
  );
}

"use client";

import envConfig from "@/config";
import { useEffect } from "react";
import { useAppContext } from "../app-provider";

export default function profile() {
  const { sessionToken } = useAppContext();
  useEffect(() => {
    const fetchRequest = async () => {
      const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        method: "GET",
      }).then(async (res) => {
        const payload = await res.json();
        const data = {
          status: res.status,
          payload,
        };
        if (!res.ok) {
          throw data;
        }

        return data;
      });
      console.log(result);
    };
    fetchRequest();
  }, [sessionToken]);

  return <div>{sessionToken}</div>;
}

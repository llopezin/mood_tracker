import React from "react";
import { PageProps } from "../../../.next/types/app/page";

export default function Page({ params }: PageProps) {
  return (
    <>
      <h1>{JSON.stringify({ params })}</h1>
    </>
  );
}

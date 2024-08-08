import { GetMoodsQueryDocument } from "@/generated/graphql";
import { query } from "@/service/apollo";
import React from "react";

export default async function Page() {
  const { data } = await query({
    query: GetMoodsQueryDocument,
  });

  return (
    <>
      <h1>Past moods</h1>
      {JSON.stringify(data)}
    </>
  );
}

import { GetMoodsQueryDocument } from "@/generated/graphql";
import { query } from "@/service/apollo";
import React from "react";

export default async function MoodList() {
  const { data } = await query({
    query: GetMoodsQueryDocument,
  });
  return <>{JSON.stringify(data)}</>;
}

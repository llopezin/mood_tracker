import formatDateToENGB from "@/utils/date/formatDateToENGB";

const transformMoodsData = (data?: any[] | null | undefined) => {
  return data
    ?.map((m) => ({ ...m, date: formatDateToENGB(m?.date || "") }))
    .reverse() as any[];
};

export default transformMoodsData;

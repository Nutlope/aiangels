import Dashboard from "./ClientPage";
import prisma from "../utils/prisma";
import { cache } from "react";
// import data from "./data.json";

export const revalidate = 86400; // revalidate the data at most every 24 hours

const getAllAngels = cache(async () => {
  const data = await prisma.investor.findMany({});
  return data;
});

export default async function HomePage() {
  const data = await getAllAngels();

  return <Dashboard data={data} />;
}

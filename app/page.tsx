import Dashboard from './ClientPage';
import prisma from '../utils/prisma';
import { cache } from 'react';

export const revalidate = 86400; // revalidate the data at most every 24 hours

export const getAllAngels = cache(async () => {
  const data = await prisma.investor.findMany({});
  return data;
});

export default async function HomePage() {
  const data = getAllAngels();

  return (
    <div>
      <Dashboard data={data} />
    </div>
  );
}

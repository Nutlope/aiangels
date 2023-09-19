import Dashboard from './ClientPage';
import prisma from '../utils/prisma';

export default async function HomePage() {
  const data = await prisma.investor.findMany({});

  return (
    <div>
      <Dashboard data={data} />
    </div>
  );
}

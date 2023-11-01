import Dashboard from './ClientPage';
import prisma from '../utils/prisma';
import { cache } from 'react';

export const revalidate = 86400; // revalidate the data at most every 24 hours

const getAllAngels = cache(() => {
    return prisma.investor.findMany();
});

export default async function HomePage() {
    const data = await getAllAngels();

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 md:px-8 sm:pt-16 pt-8 text-gray-600">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl max-w-3xl">
                        Find the next angel investor for your AI startup
                    </h1>
                </div>
            </div>
            <Dashboard data={data} />
        </>
    );
}

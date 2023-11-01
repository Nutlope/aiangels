import { notFound } from 'next/navigation';
import prisma from '../../utils/prisma';
import { cache } from 'react';
import AngelPage from './AngelPage';
import { Metadata } from 'next';

interface Props {
    params: {
        slug: string;
    };
}

export const revalidate = 86400;

const getAngel = cache(async (slug: string) => {
    return prisma.investor.findUnique({
        where: {
            slug,
        },
    });
});

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const angel = await getAngel(params.slug);

    return {
        title: `${angel?.name} - AI Angels`,
        description: angel?.details ?? `Find ${angel?.name} on AI Angels`,
    };
};

const AngelIdPage = async ({ params }: Props) => {
    const angel = await getAngel(params.slug);

    if (!angel) {
        notFound();
    }

    return <AngelPage angel={angel} />;
};

export default AngelIdPage;

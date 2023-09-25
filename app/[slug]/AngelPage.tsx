import { Investor } from '@prisma/client';
import Image from 'next/image';
import TwitterIcon from '../../components/Icons/TwitterIcon';
import WebsiteIcon from '../../components/Icons/WebsiteIcon';
import CheckIcon from '../../components/Icons/CheckIcon';
import CheckBadge from '../../components/CheckBadge';

const AngelPage = ({ angel }: { angel: Investor }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 space-y-4">
            <Image
                className="rounded-full hover:scale-105 transition-all"
                width={200}
                height={200}
                src={angel.twitterPicture ?? ''}
                alt="twitter avatar"
            />
            <div className="flex flex-col space-y-2 items-center">
                <div className="flex space-x-2 items-center">
                    <h1 className="text-4xl text-gray-800 font-extrabold">
                        {angel.name}
                    </h1>
                    {angel.twitterVerified && (
                        <CheckIcon className="inline mt-1" />
                    )}
                </div>
                <p className="text-sm text-gray-400">
                    {angel.title} {angel.company && `@ ${angel.company}`}
                </p>
            </div>
            <div className="flex space-x-2 items-center">
                <a
                    className="text-blue-500"
                    href={angel.email ?? ''}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="sr-only">Twitter</span>
                    <TwitterIcon />
                </a>
                {angel.site && (
                    <a
                        className="text-blue-500"
                        href={angel.site}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="sr-only">Website</span>
                        <WebsiteIcon />
                    </a>
                )}
            </div>
            <div className="bg-white rounded-lg shadow-md border-gray-300 border max-w-xl relative">
                <div className="h-4 w-4 rotate-45 bg-white border-t border-l border-gray-300 absolute -top-2 left-10"></div>
                {angel.details && (
                    <h3 className="text-sm md:text-base text-center text-gray-400 font-normal p-4">
                        "{angel.details}"
                    </h3>
                )}
                <div className="w-full h-[1px] bg-gray-300 my-1"></div>
                <div className="p-4 flex items-center space-x-2 justify-center">
                    <p className="text-sm font-medium text-gray-400">
                        Writes checks for
                    </p>
                    <CheckBadge checkSize={angel.checksize_id ?? 0} />
                </div>
            </div>
        </div>
    );
};

export default AngelPage;

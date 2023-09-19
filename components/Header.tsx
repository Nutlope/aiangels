import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav className="max-w-7xl md:text-sm flex sm:flex-row flex-col justify-between items-center gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/newIcon.svg" alt="logo" width={30} height={30} />
          <div className="font-bold text-lg">AI Angels</div>
        </Link>
        <div className="text-gray-700 sm:max-w-7xl max-w-[200px]">
          Want to add yourself as an angel investor?{' '}
          <a
            className="text-black font-medium"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/nutlope"
          >
            DM me
          </a>
          .
        </div>
      </nav>
      <div className="max-w-6xl mx-auto px-4 md:px-8 sm:pt-16 pt-8 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl max-w-3xl">
            Find the next angel investor for your AI startup
          </h1>
        </div>
      </div>
    </>
  );
}

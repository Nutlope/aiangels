/* eslint-disable react/no-unescaped-entities */
import Image from "next/future/image";
import Head from "next/head";
import prisma from "../utils/prisma";

// function compare(a: any, b: any) {
//   let aCheckSize = "$0-2k";
//   let bCheckSize = "$0-2k";

//   if (a.checkSize) aCheckSize = a.checkSize;
//   if (b.checkSize) bCheckSize = b.checkSize;

//   let aNumber = aCheckSize.substr(1, aCheckSize.indexOf("-") - 1);
//   let bNumber = bCheckSize.substr(1, bCheckSize.indexOf("-") - 1);

//   if (aNumber > bNumber) {
//     return -1;
//   }
//   if (aNumber < bNumber) {
//     return 1;
//   }

//   return 0;
// }

function compare(a: any, b: any) {
  if (a.id > b.id) {
    return -1;
  }
  if (a.id < b.id) {
    return 1;
  }
  return 0;
}

export default function Dashboard({ data }: any) {
  let angels = JSON.parse(data).sort(compare);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 pb-20 sm:px-6 lg:px-8">
      <Head>
        <title>Devtool Angels</title>
        <meta
          name="description"
          content="A list of angel investors that invest in developer tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-6xl pt-20">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-semibold text-gray-900">
              Devtool Angels
            </h1>
            <p className="mt-2 text-gray-700">
              A list of angel investors that invest in developer tools. Based on{" "}
              <a
                href="https://github.com/sw-yx/devtools-angels"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                swyx's devtools-angels
              </a>
              .
            </p>
          </div>
          <div className="text-gray-700 sm:-mt-9 mt-2">
            Want to add yourself as an angel investor?{" "}
            <a
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/nutlope"
            >
              DM me
            </a>
            .
          </div>
        </div>
        <div className="relative mt-10">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative mx-auto max-w-7xl">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
              <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Angel Investors
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  {angels.length}
                </dd>
              </div>
              <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Avg Check Size
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  $20k
                </dd>
              </div>
              <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Confirmed Investments
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  30+
                </dd>
              </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Companies
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  37
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Company
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Check Size
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {angels.map((person: any) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <Image
                                className="rounded-full"
                                width={40}
                                height={40}
                                src={person.twitterPicture}
                                alt="twitter avatar"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {person.name}
                              </div>
                              <div className="flex space-x-2 items-center mt-1">
                                <a
                                  className="text-blue-500"
                                  href={person.email}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="sr-only">Twitter</span>
                                  <svg
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                  </svg>
                                </a>
                                {person.site && (
                                  <a
                                    className="text-blue-500"
                                    href={person.site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span className="sr-only">Website</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                      />
                                    </svg>
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.company ? person.company : "Unknown"}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.title ? person.title : "Software Engineer"}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {/* // Check sizes are: 2-5k, 5-15k, 15-25k, 25-50k, 100k+ */}
                          <span
                            className={classNames(
                              person.checkSize === "$2-5k"
                                ? "bg-green-100 text-green-800"
                                : person.checkSize === "$5-15k"
                                ? "bg-blue-100 text-blue-800"
                                : person.checkSize === "$15-25k"
                                ? "bg-red-100 text-red-800"
                                : person.checkSize === "$25-50k"
                                ? "bg-cyan-100 text-cyan-800"
                                : person.checkSize === "$100k+"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-orange-100 text-orange-800",
                              "inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5  "
                            )}
                          >
                            {person.checkSize ? person.checkSize : "Unknown"}
                          </span>
                        </td>
                        <td className="max-w-xs px-3 py-4 text-sm text-gray-500">
                          {person.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await prisma.investor.findMany({});

  return {
    props: {
      data: JSON.stringify(data),
    },
  };
}

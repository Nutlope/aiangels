/* eslint-disable react/no-unescaped-entities */
import Image from "next/future/image";
import Head from "next/head";
import prisma from "../utils/prisma";

function compare(a: any, b: any) {
  if (a.checkSize < b.checkSize) {
    return -1;
  }
  if (a.checkSize > b.checkSize) {
    return 1;
  }
  return 0;
}

export default function Dashboard({ angels }: any) {
  angels = JSON.parse(angels).sort(compare);
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
      ;
      <div className="mx-auto max-w-6xl pt-20">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-semibold text-gray-900">
              Devtool Angels
            </h1>
            <p className="mt-2 text-gray-700">
              A list of active angel investors that invest in developer tool
              startups. This list is based on{" "}
              <a href="https://github.com/sw-yx/devtools-angels">
                {" "}
                swyx's devtools-angels repo.
              </a>
            </p>
          </div>
          <div>
            Want to add yourself as an angel investor?{" "}
            <a href="https://twitter.com/nutlope">DM me</a>.
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
                  {angels.reduce((a: any, b: any) => a + b.checkSize, 0) /
                    angels.length}
                </dd>
              </div>
              <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Confirmed Investments
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  11+
                </dd>
              </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Individual Companies
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  {angels.length}
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
                              <div className="text-gray-500">
                                {person.email}
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
                          <span
                            className={classNames(
                              person.checkSize === "regular"
                                ? "bg-green-100 text-green-800"
                                : person.checkSize === "exec"
                                ? "bg-blue-100 text-blue-800"
                                : person.checkSize === "customer"
                                ? "bg-red-100 text-red-800"
                                : person.checkSize === "partner"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-orange-100 text-orange-800",
                              "inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5  "
                            )}
                          >
                            {person.checkSize}
                            {/* {person.checkSize === "regular"
                              ? "Community"
                              : person.checkSize === "exec"
                              ? "Exec Track"
                              : person.checkSize[0].toUpperCase() +
                                person.checkSize.slice(1).toLowerCase()} */}
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

export async function getServerSideProps() {
  const angels = await prisma.investor.findMany();

  return {
    props: {
      angels: JSON.stringify(angels),
    },
  };
}

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/future/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import EmailIcon from "../components/EmailIcon";
import prisma from "../utils/prisma";

// TODO: Move all of these to a utils file
function compare(a: any, b: any) {
  if (a.twitterVerified === true && b.twitterVerified !== true) {
    return -1;
  }
  if (a.twitterVerified !== true && b.twitterVerified === true) {
    return 1;
  }
  if (a.checksize_id > b.checksize_id) {
    return -1;
  }
  if (a.checksize_id < b.checksize_id) {
    return 1;
  }
  return 0;
}

function kFormatter(num: any) {
  return Math.abs(num) > 4000
    ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(0)) + "k"
    : Math.sign(num) * Math.abs(num);
}

let checkSizeMap = {
  0: "Unknown",
  1: "$2-5k",
  2: "$5-15k",
  3: "$15-25k",
  4: "$25-50k",
  6: "$100k+",
  7: "All",
};

let averageCheckSize = {
  0: 0,
  1: 3500,
  2: 10000,
  3: 20000,
  4: 37500,
  6: 100000,
};

export default function Dashboard({ data }: any) {
  const [currentType, setCurrentType] = useState("7");
  const [angels, setAngels] = useState(
    JSON.parse(data)
      .filter((angel: any) => !angel.hidden)
      .sort(compare)
  );
  const [companies, setCompanies] = useState([]);
  const [averageCheck, setAverageCheck] = useState(0);
  const [search, setSearch] = useState("");

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  function typeSelect(e: any) {
    setCurrentType(e.currentTarget.id);
  }

  useEffect(() => {
    if (currentType === "7") {
      setAngels(
        JSON.parse(data)
          .filter((angel: any) => !angel.hidden)
          .filter((angel: any) =>
            angel.name.toLowerCase().includes(search.toLowerCase())
          )
          .sort(compare)
      );
    } else {
      setAngels(
        JSON.parse(data)
          .filter((angel: any) => !angel.hidden)
          .sort(compare)
          .filter(
            (person: any) => person.checksize_id.toString() === currentType
          )
          .filter((angel: any) =>
            angel.name.toLowerCase().includes(search.toLowerCase())
          )
      );
    }
  }, [currentType, search]);

  useEffect(() => {
    let tempCompanies: any = [];
    for (let user of angels) {
      if (!tempCompanies.includes(user.company)) {
        tempCompanies.push(user.company);
      }
    }
    setCompanies(tempCompanies);

    // calculate the average check size
    let total = 0;
    let count = 0;
    angels.forEach((angel: any) => {
      if (angel.checksize_id) {
        total += averageCheckSize[angel.checksize_id];
        count++;
      }
    });
    let average = total / count;
    setAverageCheck(average);
  }, [angels]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 pb-10 sm:px-6 lg:px-8">
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
              A list of angel investors that invest in developer tools based on{" "}
              <a
                href="https://github.com/sw-yx/devtools-angels"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                devtools-angels
              </a>
              .
            </p>
          </div>
          <div className="text-gray-700 sm:-mt-9 mt-2 text-sm">
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
                  Average Check Size
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  {kFormatter(averageCheck)
                    ? "$" + kFormatter(averageCheck)
                    : "$0"}
                </dd>
              </div>
              <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                {/* TODO: Make this dynamic */}
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Confirmed Investments
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  {(angels.length * 0.8).toFixed(0)}+
                </dd>
              </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Companies
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-black">
                  {companies.length}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="sm:flex justify-between hidden mt-4">
          <span className="isolate mt-5 inline-flex rounded-md shadow-sm">
            <button
              type="button"
              id={"7"}
              className={classNames(
                currentType === "7"
                  ? "bg-gray-200"
                  : "bg-white hover:bg-gray-50",
                "relative inline-flex items-center rounded-l-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-gray-500"
              )}
              onClick={(e) => typeSelect(e)}
            >
              All
            </button>
            <button
              type="button"
              id="1"
              className={classNames(
                currentType === "1"
                  ? "bg-gray-200"
                  : "bg-white hover:bg-gray-50",
                "relative -ml-px inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 focus:z-10  focus:outline-none focus:ring-gray-500"
              )}
              onClick={(e) => typeSelect(e)}
            >
              $2-5k
            </button>
            <button
              type="button"
              id="2"
              className={classNames(
                currentType === "2"
                  ? "bg-gray-200"
                  : "bg-white hover:bg-gray-50",
                "relative -ml-px inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 focus:z-10  focus:outline-none focus:ring-gray-500"
              )}
              onClick={(e) => typeSelect(e)}
            >
              $5-15k
            </button>
            <button
              type="button"
              id="3"
              className={classNames(
                currentType === "3"
                  ? "bg-gray-200"
                  : "bg-white hover:bg-gray-50",
                "relative -ml-px inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 focus:z-10  focus:outline-none focus:ring-gray-500"
              )}
              onClick={(e) => typeSelect(e)}
            >
              $15-$25k
            </button>
            <button
              type="button"
              id="4"
              className={classNames(
                currentType === "4"
                  ? "bg-gray-200"
                  : "bg-white hover:bg-gray-50",
                "relative -ml-px inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 focus:z-10  focus:outline-none focus:ring-gray-500"
              )}
              onClick={(e) => typeSelect(e)}
            >
              $25-$50k
            </button>
            <button
              type="button"
              id="6"
              className={classNames(
                currentType === "6"
                  ? "bg-gray-200"
                  : "bg-white hover:bg-gray-50",
                "relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-gray-500"
              )}
              onClick={(e) => typeSelect(e)}
            >
              $100k+
            </button>
          </span>
          <div className="relative mt-5">
            <EmailIcon
              className="h-5 w-5 absolute z-20 left-3 bottom-2 feather feather-search"
              aria-hidden="true"
            />
            <input
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" rounded-xl shadow-sm inline-flex relative items-center border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:z-10 focus:outline-none focus:ring-gray-500 w-72 pl-10 xs:pl-12"
              placeholder="Search by name"
            />
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
                    {angels.length === 0 && (
                      <td className="whitespace-nowrap px-2 py-3 text-center text-gray-500">
                        No results found
                      </td>
                    )}
                    {angels.map((person: any) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-2 pl-3 text-sm sm:pl-6">
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
                                {person.twitterVerified && (
                                  <svg
                                    height="20"
                                    viewBox="0 0 512 512"
                                    width="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline ml-1"
                                  >
                                    <path
                                      d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z"
                                      fill="#1da1f2"
                                    />
                                  </svg>
                                )}
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
                        <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-500">
                          {person.company ? person.company : "Unknown"}
                        </td>
                        <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-500">
                          {person.title ? person.title : "Software Engineer"}
                        </td>
                        <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-500">
                          <span
                            className={classNames(
                              person.checksize_id === 1
                                ? "bg-green-100 text-green-800"
                                : person.checksize_id === 2
                                ? "bg-blue-100 text-blue-800"
                                : person.checksize_id === 3
                                ? "bg-red-100 text-red-800"
                                : person.checksize_id === 4
                                ? "bg-cyan-100 text-cyan-800"
                                : person.checksize_id === 6
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-orange-100 text-orange-800",
                              "inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5  "
                            )}
                          >
                            {checkSizeMap[person.checksize_id]}
                          </span>
                        </td>
                        <td className="max-w-xs px-2 py-3 text-sm text-gray-500">
                          {person.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center mt-10">
                <svg
                  height="20"
                  viewBox="0 0 512 512"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline mr-1"
                >
                  <path
                    d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z"
                    fill="#1da1f2"
                  />
                </svg>
                means the angel investor has confirmed their information is
                accurate and up to date.
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

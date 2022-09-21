import Image from "next/future/image";
import Highlighter from "react-highlight-words";
import { checkSizeMap, classNames } from "../utils/utils";
import CheckIcon from "./CheckIcon";

export default function InvestorTable({ angels, search }) {
  return (
    <div>
      <table className="min-w-full md:divide-y bg-gray-100 md:bg-transparent divide-gray-300 rounded-lg overflow-hidden md:rounded-none">
        <thead className="bg-gray-50 hidden md:table-header-group">
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
        <tbody className="md:divide-y divide-gray-200 md:bg-white grid grid-cols-1 gap-3 sm:grid-cols-2 md:table-row-group">
          {angels.map((person: any) => (
            <tr
              key={person.email}
              className="grid grid-cols-3 gap-1 md:table-row bg-white rounded-lg md:rounded-none md:bg-transparent shadow md:shadow-none border border-gray-200 md:border-x-0 py-3 px-2 md:p-0"
            >
              <td className="col-span-3 whitespace-nowrap pl-3 md:py-2 md:pl-6 text-sm sm:pl-6">
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
                      <Highlighter
                        searchWords={search.split(" ")}
                        autoEscape={true}
                        textToHighlight={person.name}
                      />
                      {person.twitterVerified && (
                        <CheckIcon className="inline ml-1" />
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
              <td className="col-span-1 row-start-2 whitespace-nowrap px-3 md:px-2 md:py-3 text-sm text-gray-500 font-bold md:font-normal">
                <Highlighter
                  searchWords={search.split(" ")}
                  autoEscape={true}
                  textToHighlight={person.company ?? "Unknown"}
                />
              </td>
              <td className="col-span-3 whitespace-nowrap px-3 md:px-2 md:py-3 text-sm text-gray-500 -mt-2 md:mt-0">
                <Highlighter
                  searchWords={search.split(" ")}
                  autoEscape={true}
                  textToHighlight={person.title ?? "Software Engineer"}
                />
              </td>
              <td className="col-span-3 row-start-2 whitespace-nowrap px-0 md:px-2 md:py-3 text-sm text-gray-500 justify-self-end">
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
              <td className="col-span-3 md:max-w-xs px-3 md:px-2 md:py-3 text-sm text-gray-500">
                <Highlighter
                  searchWords={search.split(" ")}
                  autoEscape={true}
                  textToHighlight={person.details}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {angels.length === 0 && (
        <div className="text-center my-10">No results found</div>
      )}
    </div>
  );
}

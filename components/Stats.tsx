import { kFormatter } from "../utils/utils";

export default function Stats({ angelsLength, averageCheck, companiesLength }) {
  return (
    <div className="relative mt-10">
      <div className="absolute inset-0 h-1/2" />
      <div className="relative mx-auto max-w-7xl">
        <dl className="rounded-lg dark:bg-zinc-700 bg-white shadow-lg sm:grid sm:grid-cols-4">
          <div className="flex flex-col border-b border-gray-100 dark:border-zinc-700 p-6 text-center sm:border-0 sm:border-r">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-zinc-100">
              Angel Investors
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-black dark:text-white">
              {angelsLength}
            </dd>
          </div>
          <div className="flex flex-col border-t border-b border-gray-100 dark:border-zinc-800 p-6 text-center sm:border-0 sm:border-l sm:border-r">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-zinc-100">
              Average Check Size
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-black dark:text-white">
              {kFormatter(averageCheck) ? "$" + kFormatter(averageCheck) : "$0"}
            </dd>
          </div>
          <div className="flex flex-col border-t border-b border-gray-100 dark:border-zinc-800 p-6 text-center sm:border-0 sm:border-l sm:border-r">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-zinc-100">
              Confirmed Investments
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-black dark:text-white">
              {(angelsLength * 2.5).toFixed(0)}+
            </dd>
          </div>
          <div className="flex flex-col border-t border-gray-100 dark:border-zinc-800 p-6 text-center sm:border-0 sm:border-l">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-zinc-100">
              Companies
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-black dark:text-white">
              {companiesLength}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

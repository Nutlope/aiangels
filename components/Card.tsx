import Image from 'next/image';

export default function Card({ heading, value, change, percent }: any) {
  return (
    <div className="border border-gray-200 shadow-xl rounded-lg py-5 px-7 flex justify-between">
      <div className="flex flex-col gap-5">
        <h3 className="text-xl">{heading}</h3>
        <h2 className="text-3xl font-bold">{value}</h2>
        <p className="text-gray-500 font-medium">
          <span
            className={`${
              change === 'positive' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {change === 'positive' ? '↑' : '↓'} {percent}%
          </span>{' '}
          last month
        </p>
      </div>
      <Image
        src={change === 'positive' ? '/green-chart.svg' : '/red-chart.svg'}
        width={150}
        height={150}
        alt="chart"
        className="opacity-70 mt-16"
      />
    </div>
  );
}

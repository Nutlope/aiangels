export default function Header() {
  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-3xl font-semibold text-gray-900">Devtool Angels</h1>
        <p className="mt-2 text-gray-700">
          A list of angel investors that invest in developer tools based on{' '}
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
        Want to add yourself as an angel investor?{' '}
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
  );
}

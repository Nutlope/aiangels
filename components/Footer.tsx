import Link from "next/link";
import CheckIcon from "./Icons/CheckIcon";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-10 sm:gap-0 gap-4 flex sm:flex-row flex-col justify-between items-center px-3 space-y-2 sm:mb-0 mb-3">
      <div>
        <CheckIcon className="inline mr-1" />
        verified.
      </div>
      <p className="font-semibold text-sm">Made by Dhruv, Nidhi and Richa💖</p>
      <div className="flex space-x-3 sm:space-x-4">
        <a
          href="https://twitter.com/devsbond007"
          className="group"
          aria-label="TaxPal on Twitter"
        >
          <svg
            aria-hidden="true"
            className="h-6 mt-1 w-6 fill-slate-500 group-hover:fill-slate-700"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
          </svg>
        </a>
        <a
          href="https://github.com/dhruvvbhavsar"
          className="group"
          aria-label="GitHub"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

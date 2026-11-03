import Link from 'next/link';
import { MarkGithubIcon } from './svg/icons';

export default function Footer() {
  return (
    <footer className="mt-8 mb-16 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-neutral-600 dark:text-neutral-300">
      <ul className="flex gap-x-4">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="5" cy="19" r="2" />
              <path d="M3 10v3a8 8 0 0 1 8 8h3C14 14.9 9.1 10 3 10Zm0-7v3c8.3 0 15 6.7 15 15h3C21 11.1 12.9 3 3 3Z" />
            </svg>
            <p className="ml-2">RSS</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/fahchen"
          >
            <MarkGithubIcon />
            <p className="ml-2">GitHub</p>
          </a>
        </li>
      </ul>
      <p>
        <Link
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          className="mr-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          CC BY-NC-SA 4.0
        </Link>
        {new Date().getFullYear()} © Phil Chen
      </p>
    </footer>
  );
}

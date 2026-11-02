export function PostLabels({ labels }: { labels?: string }) {
  if (!labels) return null;

  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
      {labels.split(',').map((label) => {
        const name = label.trim();
        return (
          <li
            key={name}
            className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
}

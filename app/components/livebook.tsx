export function RunInLivebookLink({ file }: { file: string }) {
  const params = new URLSearchParams({
    url: `https://raw.githubusercontent.com/fahchen/fahchen/refs/heads/main/livebooks/${file}.livemd`,
  });
  const url = `https://livebook.dev/run?${params.toString()}`;

  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      {/* biome-ignore lint/performance/noImgElement: external badge, no benefit from next/image */}
      <img
        src="https://livebook.dev/badge/v1/black.svg"
        alt="Run in Livebook"
      />
    </a>
  );
}

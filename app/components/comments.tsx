'use client';

import Giscus from '@giscus/react';

export function Comments() {
  return (
    <Giscus
      id="comments"
      repo="fahchen/fahchen"
      repoId="MDEwOlJlcG9zaXRvcnkzNzEzODc5OTQ="
      category="Announcements"
      categoryId="DIC_kwDOFiLuWs4Czr2c"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="noborder_light"
      lang="en"
      loading="lazy"
    />
  );
}

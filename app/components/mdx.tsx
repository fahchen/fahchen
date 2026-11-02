import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import { render } from 'pele';
import React, { type ReactNode, useId } from 'react';
import { highlight } from 'sugar-high';
import { RunInLivebookLink } from './livebook';

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header, index) => (
    // biome-ignore lint: suspicious/noArrayIndexKey
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    // biome-ignore lint: suspicious/noArrayIndexKey
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        // biome-ignore lint: suspicious/noArrayIndexKey
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink({ href, ...props }: { href: string; children: ReactNode }) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a href={href} {...props} />;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage({ alt, ...props }: { alt: string; src: string }) {
  return <Image alt={alt} className="rounded-lg" {...props} />;
}

function Pre({ children }: { children: ReactNode }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  if (
    React.isValidElement<{ className?: string; children?: string }>(children) &&
    children.props.className === 'language-mermaid' &&
    typeof children.props.children === 'string'
  ) {
    const { svg } = render(children.props.children, {
      idPrefix: `diagram-${id}`,
    });
    // Diagrams are authored in trusted local MDX files.
    // biome-ignore lint/security/noDangerouslySetInnerHtml: Pele renders the diagram as SVG.
    return <div dangerouslySetInnerHTML={{ __html: svg }} />;
  }
  return <pre>{children}</pre>;
}

function Code({ children, ...props }: { children: string }) {
  const codeHTML = highlight(children);
  // biome-ignore lint: security/noDangerouslySetInnerHtml
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: ReactNode) {
  return str
    ?.toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters except for -
    .replace(/--+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
  // biome-ignore lint/correctness/noComponentHookFactories: Created once at module initialization.
  const Heading = ({ children }: { children: ReactNode }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  pre: Pre,
  code: Code,
  Table,
  RunInLivebookLink,
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

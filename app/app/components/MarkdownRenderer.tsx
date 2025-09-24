"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Highlight, themes } from 'prism-react-renderer';
import { type ReactNode } from 'react';

// Use the built-in theme from prism-react-renderer
const vscDarkPlus = themes.vsDark;

interface MarkdownRendererProps {
  content: string;
}

interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

interface ImageProps {
  node?: any;
  alt?: string;
  src?: string | Blob;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

interface LinkProps {
  node?: any;
  href?: string;
  children?: ReactNode;
  [key: string]: any;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose dark:prose-invert max-w-none break-words overflow-x-hidden">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }: CodeProps) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className="rounded-md overflow-hidden my-4 shadow-lg">
                <div className="bg-gray-800 text-gray-200 text-xs px-2 py-1 font-mono">
                  {match[1]}
                </div>
                <Highlight
                  theme={vscDarkPlus}
                  code={String(children).replace(/\n$/, '')}
                  language={match[1]}
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={{ ...style, margin: 0, padding: '1rem', overflowX: 'auto' }}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          <span className="line-number">{i + 1}</span>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            ) : (
              <code
                className={`bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1 rounded font-mono break-words ${className || ''}`}
                {...props}
              >
                {children}
              </code>
            );
          },
          img: ({ node, alt, ...props }: ImageProps) => (
            <div className="my-6">
              <img
                {...props}
                className="rounded-lg shadow-lg w-full h-auto max-w-full"
                alt={alt || 'Blog post image'}
              />
              {alt && (
                <p className="text-center text-sm text-gray-500 mt-2">{alt}</p>
              )}
            </div>
          ),
          a: ({ node, ...props }: LinkProps) => (
            <a
              {...props}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline break-words break-all"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;

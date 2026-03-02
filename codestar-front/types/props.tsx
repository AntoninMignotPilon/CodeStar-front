export interface MacOSCodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
  allowCopy?: boolean;
}
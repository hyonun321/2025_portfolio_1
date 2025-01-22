// components/typography/index.tsx
interface StyledTextProps {
  children: React.ReactNode;
}

export const Highlight1 = ({ children }: StyledTextProps) => (
  <span className={" text-white text-gradient-cyan font-bold"}>{children}</span>
);

export const Highlight2 = ({ children }: StyledTextProps) => (
  <span className={" text-white text-gradient-sunset font-bold"}>
    {children}
  </span>
);

export const Paragraph = ({ children }: StyledTextProps) => (
  <span className="text-gradient-rainbow text-3xl font-semibold">
    {children}
  </span>
);

// components/typography/index.tsx
interface StyledTextProps {
  children: React.ReactNode;
}

export const Highlight1 = ({ children }: StyledTextProps) => (
  <span className="text-base md:text-xl text-white text-gradient-cyan font-bold">
    {children}
  </span>
);

export const Highlight2 = ({ children }: StyledTextProps) => (
  <span className="text-lg md:text-xl text-white text-gradient-sunset font-bold">
    {children}
  </span>
);

export const Paragraph = ({ children }: StyledTextProps) => (
  <span className="text-base md:text-lg text-gradient-rainbow font-semibold">
    {children}
  </span>
);

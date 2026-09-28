import { Sparkles } from "lucide-react";

type EyebrowProps = {
  eyebrow: string;
  as?: "div" | "h2";
  variant?: "light" | "dark";
  className?: string;
};

const variants = {
  light: {
    icon: "text-[#7e22ce]",
    diamond: "border-[#7e22ce]/50",
    text: "text-[#6b21a8]/85",
    line: "from-[#9333ea]/50",
  },
  dark: {
    icon: "text-[#d8b4fe]",
    diamond: "border-[#c084fc]/45",
    text: "text-[#d8b4fe]/82",
    line: "from-[#c084fc]/50",
  },
};


export function Eyebrow({ eyebrow, as = "div", variant = "light", className = "" }: EyebrowProps) {
  const Tag = as;
  const styles = variants[variant];

  return (
    <Tag className={`flex min-w-0 items-center gap-2 ${styles.icon} ${className}`}>
      <span aria-hidden="true" className="relative flex size-7 shrink-0 items-center justify-center">
        <span className={`absolute inset-0 rotate-45 border ${styles.diamond}`} />
        <Sparkles size={15} strokeWidth={1.8} />
      </span>
      <p className={`ml-1 whitespace-nowrap text-[clamp(.625rem,.7vw,.75rem)] font-bold uppercase tracking-[0.17em] ${styles.text}`}>{eyebrow}</p>
      <span aria-hidden="true" className={`h-px min-w-0 max-w-20 flex-1 bg-gradient-to-r ${styles.line} to-transparent`} />
    </Tag>
  );
}
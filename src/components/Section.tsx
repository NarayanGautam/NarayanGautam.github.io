import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className = "" }: Props) {
  const { ref, visible } = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`section-fade py-20 md:py-24 ${visible ? "visible" : ""} ${className}`}
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <header className="mb-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text md:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-xl text-muted">{subtitle}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

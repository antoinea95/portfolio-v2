import { PropsWithChildren } from "react";

/**
 * `Section` is a component that renders a styled section element.
 * It is used to wrap and center its child elements within a bordered area.
 *
 * @param {PropsWithChildren} props - The properties for the Section component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the section.
 *
 * @returns A section element containing the provided children, styled with a border and flex properties.
 */
export const Section = ({ children }: PropsWithChildren) => {
  return (
    <section className="min-h-[70vh] lg:h-full max-h-dvh flex items-center justify-center pt-16">
      {children}
    </section>
  );
};

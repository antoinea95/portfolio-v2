import { IconType } from "react-icons";
import { useAppContext } from "../../hooks/useAppContext";

/**
 * `RoundLink` is a component that renders a rounded link with an icon and text that slides in on hover.
 *
 * @param {Object} props - The properties for the RoundLink component.
 * @param {string} props.url - The URL for the link.
 * @param {string} props.src - The source path for the icon image.
 * @param {string} props.content - The text content displayed within the link.
 *
 * @returns A rounded link with an image icon and sliding text effect on hover.
 */
export const IconLink = ({
  url,
  icon,
  content,
}: {
  url: string;
  icon: IconType;
  content: string;
}) => {
  const Icon = icon;

  const {isLargeScreen} = useAppContext();

  return (
    <a
      href={url}
      target="_blank"
      className="flex items-center gap-2 bg-primary px-1.5 py-1 rounded-full text-tertiary group w-fit"
    >
      <Icon className=" flex items-center justify-center aspect-square shrink-0 translate-x-1 z-[1]"/>
      {isLargeScreen && <span className="inline-block text-tertiary transition-all text-lg font-light max-w-0 overflow-hidden group-hover:max-w-[95px] group-hover:pr-1">
        {content}
      </span>}
    </a>
  );
};

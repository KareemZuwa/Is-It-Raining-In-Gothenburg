interface SkeletonImageLoaderProps {
  size: "xl" | "lg" | "md" | "sm";
}

export const SkeletonImageLoader = ({ size }: SkeletonImageLoaderProps) => {
  let heightWidthClass: string;

  switch (size) {
    case "xl":
      heightWidthClass = "h-[10.625rem] w-[10.625rem]";
      break;
    case "lg":
      heightWidthClass = "h-[6.25rem] w-[6.25rem]";
      break;
    case "md":
      heightWidthClass = "h-16 w-16";
      break;
    case "sm":
      heightWidthClass = "h-12 w-12";
      break;
    default:
      heightWidthClass = "h-16 w-16";
  }

  return (
    <div
      className={`opacity-80 flex items-center justify-center ${heightWidthClass} bg-slate-300 rounded animate-pulse animate-duration-[2000ms]`}
    >
      <svg
        className="w-10 h-10 text-gray-200"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>
  );
};

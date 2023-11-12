interface SkeletonTextProps {
  fontSize: "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg" | "base" | "xs";
  width: string;
}

export const SkeletonText = ({ width, fontSize }: SkeletonTextProps) => {
  let heightClass: string;

  switch (fontSize) {
    case "5xl":
      heightClass = "h-12";
      break;
    case "4xl":
      heightClass = "h-9";
      break;
    case "3xl":
      heightClass = "h-8";
      break;
    case "2xl":
      heightClass = "h-6";
      break;
    case "xl":
      heightClass = "h-5";
      break;
    case "lg":
      heightClass = "h-[1.125rem]";
      break;
    case "base":
      heightClass = "h-4";
      break;
    case "xs":
      heightClass = "h-3";
      break;
    default:
      heightClass = "h-4";
  }
  return (
    <div
      className={`opacity-70 my-2 bg-slate-300 rounded animate-pulse animate-duration-[2000ms] ${width} ${heightClass}`}
    ></div>
  );
};

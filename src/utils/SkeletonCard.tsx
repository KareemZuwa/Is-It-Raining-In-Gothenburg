import { SkeletonImageLoader } from "./SkeletonImageLoader";
import { SkeletonText } from "./SkeletonTextLoader";

export const SkeletonCard = () => (
  <div className="relative min-w-[193px] h-[289px] shadow-2xl rounded-xl mb-8 mx-4">
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-white opacity-70 rounded-xl"></div>
    <div className="relative h-full p-8 flex flex-col text-center text-white">
      <SkeletonText fontSize={"4xl"} width={"w-full"} />
      <SkeletonText fontSize={"xs"} width={"w-full"} />

      <section className="flex self-center">
        <SkeletonImageLoader size={"lg"} />
      </section>
      <SkeletonText fontSize={"3xl"} width={"w-full"} />
    </div>
  </div>
);

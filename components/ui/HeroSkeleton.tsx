import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HeroSkeleton() {
  return (
    <div className="mb-12 overflow-hidden rounded-3xl">
      <Skeleton
        height={500}
        baseColor="#1e293b"
        highlightColor="#334155"
      />
    </div>
  );
}
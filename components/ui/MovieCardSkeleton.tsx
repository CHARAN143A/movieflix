import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MovieCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl bg-slate-900">
      <Skeleton
        height={360}
        baseColor="#1e293b"
        highlightColor="#334155"
      />

      <div className="space-y-3 p-4">
        <Skeleton
          height={22}
          baseColor="#1e293b"
          highlightColor="#334155"
        />

        <Skeleton
          width="40%"
          height={16}
          baseColor="#1e293b"
          highlightColor="#334155"
        />
      </div>
    </div>
  );
}
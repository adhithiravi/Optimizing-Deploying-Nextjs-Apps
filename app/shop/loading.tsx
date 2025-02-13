import LoadingSkeleton from "../components/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <LoadingSkeleton />
    </div>
  );
}

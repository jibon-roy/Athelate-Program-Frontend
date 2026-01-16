import FeedBackVideos from "@/src/components/pages/home/FeedBackVideos";
import Banner from "@/src/components/ui/others/dashboard/banner/Banner";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Banner />
        <div className="bg-white/30 border border-white p-6 rounded-3xl mt-6">
          <FeedBackVideos />
        </div>
      </div>
    </>
  );
}

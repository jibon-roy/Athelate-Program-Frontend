import FeedBackVideos from "@/src/components/pages/home/FeedBackVideos";
import TaskCalender from "@/src/components/ui/others/calender/TaskCalender";
import Banner from "@/src/components/ui/others/dashboard/banner/Banner";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Banner />
        <div className="flex flex-col xl:flex-row items-center justify-between  mt-6">
          <div className="w-full xl:w-2/3 mb-6 xl:mb-0 bg-white/30 p-6 rounded-3xl shadow-[1px_1px_0_0_rgba(255,255,255,1),-1px_-1px_0_0_rgba(255,255,255,1)]">
            <FeedBackVideos />
            <TaskCalender />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

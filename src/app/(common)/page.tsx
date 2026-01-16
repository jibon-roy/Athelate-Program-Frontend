import Announcements from "@/src/components/pages/home/Announcements";
import CoachFeedBack from "@/src/components/pages/home/CoachFeedBack";
import FeedBackVideos from "@/src/components/pages/home/FeedBackVideos";
import LeaderBoardV2 from "@/src/components/pages/home/LeaderBoardV2";
import RecentActivities from "@/src/components/pages/home/RecentActivities";
import TaskCalender from "@/src/components/ui/others/calender/TaskCalender";
import Banner from "@/src/components/ui/others/dashboard/banner/Banner";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Banner />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="w-full col-span-2 bg-white/30 p-4 md:p-6 rounded-2xl md:rounded-3xl overflow-auto shadow-[1px_1px_0_0_rgba(255,255,255,1),-1px_-1px_0_0_rgba(255,255,255,1)]">
            <FeedBackVideos />
            <TaskCalender />
          </div>
          <div className="w-full">
            <RecentActivities />
            <CoachFeedBack />
          </div>
        </div>
        <div className="mt-4 md:mt-6 grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-2">
          <Announcements />
          <LeaderBoardV2 />
        </div>
      </div>
    </>
  );
}

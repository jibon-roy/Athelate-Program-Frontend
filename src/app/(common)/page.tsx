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
        <div className="grid grid-cols-1 xl:grid-cols-11 gap-4 mt-6">
          <div className="w-full rounded-3xl xl:col-span-7">
            <div className="w-full  bg-white/30 p-4 sm:p-5 h-full rounded-3xl overflow-auto shadow-[1px_1px_0_0_white,-1px_-1px_0_0_white]">
              <FeedBackVideos />
              <TaskCalender />
            </div>
          </div>
          <div className="w-full xl:col-span-4 space-y-6">
            <RecentActivities />
            <CoachFeedBack />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Announcements />
          <LeaderBoardV2 />
        </div>
      </div>
    </>
  );
}

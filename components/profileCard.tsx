import Image from "next/image";
import { GmailIcon, ProfilePictureImage } from "@/components/assets";

const ProfileCard = ({
  creatorName = "Creator Name",
  bio = "20 templates created, 200 saves, Member Since 2022",
  publishedOn = "February 14, 2023",
  usedBy = 100,
  savedBy = 50,
  tag = ["Category", "Industry"],
  icon = [GmailIcon, GmailIcon, GmailIcon, GmailIcon, GmailIcon],
}) => {
  return (
    <div className="flex flex-col gap-[26px] rounded-lg border bg-white p-6">
      <div className="flex gap-4">
        <div className="h-9 w-9 rounded-full">
          <ProfilePictureImage />
          {/* <Image
            src={ProfilePic}
            alt="profile picture"
            width={36}
            height={36}
          /> */}
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold leading-4 tracking-[0.6px] text-gray-700">
            {creatorName}
          </h4>
          <p className="w-[471px] text-xs font-normal leading-4 tracking-[0.6px] text-gray-500">
            {bio}
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-8">
          <div className="flex gap-3">
            <div className="flex flex-col gap-5 text-right text-sm leading-4 tracking-[0.6px] text-gray-500">
              <p>Published on</p>
              <p>Used by</p>
              <p>Saved by</p>
            </div>
            <div className="flex w-[177px] flex-col justify-center gap-5 text-sm font-medium leading-4 tracking-[0.6px] text-gray-600">
              <p>{publishedOn}</p>
              <p>{usedBy} users</p>
              <p>{savedBy} users</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="tacking-[0.6px] flex flex-col gap-4 text-right text-sm leading-4 text-gray-500">
              <p className="h-6">Tags</p>
              <p className="h-6">Apps Used</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                {tag.map((value, index: number) => (
                  <div
                    key={index}
                    className="badge flex items-center justify-center rounded-2xl border-none bg-blue-50 px-2 py-[2px] text-xs font-medium leading-[18px] text-blue-700"
                  >
                    {value}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {/* {icon.map((value, index: number) => (
                  <{value} />
                  // <Image
                  //   src={value}
                  //   className=""
                  //   alt="app icons"
                  //   width={24}
                  //   height={24}
                  //   key={index}
                  // />
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

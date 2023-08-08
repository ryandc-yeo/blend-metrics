import {
  CategoryNameBlueIcon,
  CategoryNameIcon,
  ViewAllIcon,
  ViewAllBlueIcon,
  RecommendedBlueIcon,
  RecommendedIcon,
  RecentlyViewedBlueIcon,
  RecentlyViewedIcon,
  MyCollectionBlueIcon,
  MyCollectionIcon,
} from "@/components/assets";

export type Props = {
  variant?: true | false;
};

export const CategoryName = ({ variant = false, title = "Category Name" }) => {
  if (variant) {
    return (
      <button className="flex w-56 max-w-full items-center rounded-md bg-[#EAF0FF] px-3 py-2">
        <CategoryNameBlueIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#306CFE]">
          {title}
        </p>
      </button>
    );
  } else {
    return (
      <button className="flex w-56 max-w-full items-center rounded-md bg-white px-3 py-2 hover:bg-gray-100">
        <CategoryNameIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#667085]">
          {title}
        </p>
      </button>
    );
  }
};

export const ViewAll = ({ variant = false, title = "View All" }) => {
  if (variant) {
    return (
      <button className="flex w-56 max-w-full items-center rounded-md bg-[#EAF0FF] px-3 py-2">
        <ViewAllBlueIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#306CFE]">
          {title}
        </p>
      </button>
    );
  } else {
    return (
      <button className="flex w-56 max-w-full items-center rounded-md bg-white px-3 py-2 hover:bg-gray-100">
        <ViewAllIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#667085]">
          {title}
        </p>
      </button>
    );
  }
};

export const Recommended = ({ variant = false, title = "Recommended" }) => {
  if (variant) {
    return (
      <button className="flex w-56 max-w-full items-center rounded-md bg-[#EAF0FF] px-3 py-2">
        <RecommendedBlueIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#306CFE]">
          {title}
        </p>
      </button>
    );
  } else {
    return (
      <button className="flex w-56 max-w-full items-center rounded-md bg-white px-3 py-2 hover:bg-gray-100">
        <RecommendedIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#667085]">
          {title}
        </p>
      </button>
    );
  }
};

export const RecentlyViewed = ({
  variant = false,
  title = "RecentlyViewed",
}) => {
  if (variant) {
    return (
      <button className="flex w-56 max-w-full items-center rounded-md bg-[#EAF0FF] px-3 py-2">
        <RecentlyViewedBlueIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#306CFE]">
          {title}
        </p>
      </button>
    );
  } else {
    return (
      <button className="flex w-56 max-w-full items-center rounded-md bg-white px-3 py-2 hover:bg-gray-100">
        <RecentlyViewedIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#667085]">
          {title}
        </p>
      </button>
    );
  }
};

export const MyCollection = ({ variant = false, title = "My Collection" }) => {
  if (variant) {
    return (
      <button className="flex w-56 max-w-full items-center rounded-md bg-[#EAF0FF] px-3 py-2">
        <MyCollectionBlueIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#306CFE]">
          {title}
        </p>
      </button>
    );
  } else {
    return (
      <button className="flex w-56 max-w-full items-center rounded-md bg-white px-3 py-2 hover:bg-gray-100">
        <MyCollectionIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#667085]">
          {title}
        </p>
      </button>
    );
  }
};

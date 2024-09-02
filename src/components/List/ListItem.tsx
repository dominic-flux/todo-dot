import type { AppRouter } from "~/server/api/root";
import type { inferRouterOutputs } from "@trpc/server";
import { type FC } from "react";
import { FaRegFolder } from "react-icons/fa6";

type RouterOutput = inferRouterOutputs<AppRouter>;
type List = RouterOutput["list"]["fetchLists"][0];

interface ListItemProps {
  list: List;
  isSelected: boolean;
  handleSelect: () => void;
}

const ListItem: FC<ListItemProps> = ({ list, isSelected, handleSelect }) => {
  return (
    <div
      className={`flex cursor-pointer items-center justify-between rounded-xl border-2 border-[#19191E] px-4 py-2 text-[#83839E] hover:border-[#2F2D36] ${isSelected && "bg-[#83839E] bg-opacity-15"}`}
      onClick={handleSelect}
    >
      <div className="flex w-full items-center justify-start space-x-2">
        <FaRegFolder className="-mt-0.5 size-4" />
        <h2 className="text-base font-medium">{list.name}</h2>
      </div>
      <span className="w-[75px] text-right">
        {list.tasks.filter((t) => t.isCompleted).length} / {list.tasks.length}
      </span>
    </div>
  );
};

export default ListItem;

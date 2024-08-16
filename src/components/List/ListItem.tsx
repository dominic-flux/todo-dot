import { type FC } from "react";
import { FaRegFolder } from "react-icons/fa6";

interface ListItemProps {
  _?: never;
}

const ListItem: FC<ListItemProps> = () => {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-xl border-2 border-[#19191E] px-4 py-2 text-[#83839E] hover:border-[#2F2D36]">
      <div className="flex w-full items-center justify-start space-x-2">
        <FaRegFolder className="-mt-0.5 size-4" />
        <h2 className="text-base font-medium">For Dev Meeting</h2>
      </div>
      <span className="w-[75px] text-right">2 / 10</span>
    </div>
  );
};

export default ListItem;

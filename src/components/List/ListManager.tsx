import type { Dispatch, SetStateAction, FC } from "react";
import { useState } from "react";

import Search from "~/components/Base/Search";
import ListItem from "~/components/List/ListItem";
import CreateListModal from "~/components/Modals/CreateListModal";
import { FaPlus } from "react-icons/fa6";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/api/root";

type RouterOutput = inferRouterOutputs<AppRouter>;
type List = RouterOutput["list"]["fetchLists"][0];

interface ListManagerProps {
  lists: List[];
  selectedList: string;
  setSelectedList: Dispatch<SetStateAction<string>>;
  refetchList: () => void;
  loadingList: boolean;
}

const ListManager: FC<ListManagerProps> = ({
  lists,
  selectedList,
  setSelectedList,
  refetchList,
  loadingList,
}) => {
  const [showCreateListModal, setShowCreateListModal] = useState(false);

  return (
    <section className="relative h-full min-w-[400px] overflow-hidden rounded-3xl bg-[#19191E] p-8 pb-52 shadow-[0px_0px_30px_2px_rgba(17,17,20,1)]">
      <Search />

      <div className="overflow-indicator mt-10 flex h-full flex-col space-y-1 overflow-scroll pb-20">
        {lists.map((list) => {
          return (
            <ListItem
              key={list.id}
              list={list}
              isSelected={list.id === selectedList}
              handleSelect={() => {
                setSelectedList(list.id);
              }}
            />
          );
        })}

        {loadingList && (
          <div role="status" className="mx-auto pt-3">
            <svg
              aria-hidden="true"
              className="inline h-8 w-8 animate-spin fill-[#8B6BF6] text-gray-200 dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-0 flex w-full items-center justify-center">
        <button
          className="rounded-full bg-gradient-to-br from-[#8B6BF6] to-[#6F44F7] px-14 py-3 text-[#FFFFFF] transition-all duration-300 ease-in-out hover:scale-110"
          onClick={() => setShowCreateListModal(true)}
        >
          <span className="flex items-center justify-center space-x-2">
            <FaPlus />
            <span className="-mb-0.5">New List</span>
          </span>
        </button>
      </div>

      {showCreateListModal && (
        <CreateListModal
          handleClose={() => setShowCreateListModal(false)}
          refetchList={refetchList}
        />
      )}
    </section>
  );
};

export default ListManager;

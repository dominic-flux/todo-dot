import { useState, type FC } from "react";

import { FaPlus } from "react-icons/fa6";
import Search from "~/components/Base/Search";
import CreateListModal from "~/components/Modals/CreateListModal";
import ListItem from "~/components/List/ListItem";

interface ListManagerProps {
  _?: never;
}

const ListManager: FC<ListManagerProps> = () => {
  const [showCreateListModal, setShowCreateListModal] = useState(false);

  return (
    <section className="relative h-full min-w-[400px] overflow-hidden rounded-3xl bg-[#19191E] p-8 pb-52 shadow-[0px_0px_30px_2px_rgba(17,17,20,1)]">
      <Search />

      <div className="overflow-indicator mt-10 flex h-full flex-col space-y-1 overflow-scroll pb-20">
        <ListItem />
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
        <CreateListModal handleClose={() => setShowCreateListModal(false)} />
      )}
    </section>
  );
};

export default ListManager;

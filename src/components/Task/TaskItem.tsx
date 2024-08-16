import { useState, type FC } from "react";

import UpdateTaskModal from "~/components/Modals/UpdateTaskModal";

import { MdModeEdit } from "react-icons/md";
import { IoRemoveCircle } from "react-icons/io5";
import DeleteTaskModal from "../Modals/DeleteTaskModal";

interface TaskItemProps {
  _?: never;
}

const TaskItem: FC<TaskItemProps> = () => {
  const [showUpdateTaskModal, setShowUpdateTaskModal] = useState(false);
  const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);

  return (
    <div className="flex cursor-pointer items-center justify-between rounded-2xl border-2 border-[#19191E] bg-[#302D36] px-5 py-4 text-[#FFFFFF] hover:bg-opacity-80">
      <div className="flex w-full items-center justify-start space-x-5">
        <div className="flex size-8 items-center justify-center rounded-full border-2 border-[#83839E]">
          {/* <FaCheck className="size-4 text-[#83839E]" /> */}
        </div>
        <h2 className="text-lg">For Dev Meeting</h2>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <span onClick={() => setShowUpdateTaskModal(true)}>
          <MdModeEdit className="size-6 text-[#8C8CCF] transition-all duration-300 ease-in-out hover:scale-125" />
        </span>

        {showUpdateTaskModal && (
          <UpdateTaskModal handleClose={() => setShowUpdateTaskModal(false)} />
        )}

        <span onClick={() => setShowDeleteTaskModal(true)}>
          <IoRemoveCircle className="size-6 text-[#8C8CCF] transition-all duration-300 ease-in-out hover:scale-125" />
        </span>

        {showDeleteTaskModal && (
          <DeleteTaskModal handleClose={() => setShowDeleteTaskModal(false)} />
        )}
      </div>
    </div>
  );
};

export default TaskItem;

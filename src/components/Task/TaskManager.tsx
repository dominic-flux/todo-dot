import { useState, type FC } from "react";

import TaskItem from "~/components/Task/TaskItem";
import UpdateListModal from "~/components/Modals/UpdateListModal";
import DeleteListModal from "~/components/Modals/DeleteListModal";
import CreateTaskModal from "~/components/Modals/CreateTaskModal";

import { FaPlus } from "react-icons/fa6";

interface TaskManagerProps {
  _?: never;
}

const TaskManager: FC<TaskManagerProps> = () => {
  const [showUpdateListModal, setShowUpdateListModal] = useState(false);
  const [showDeleteListModal, setShowDeleteListModal] = useState(false);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);

  return (
    <section className="relative h-full w-full overflow-hidden rounded-3xl bg-[#19191E] p-8 pb-40 shadow-[0px_0px_30px_2px_rgba(17,17,20,1)]">
      <div className="mb-14 flex items-end justify-between">
        <h1 className="text-4xl font-medium text-[#8C8CCF]">
          &quot;List Name&quot;
        </h1>

        <div className="flex items-center justify-end space-x-12">
          <div>
            <span
              className="cursor-pointer text-[#8C8CCF] hover:underline"
              onClick={() => setShowUpdateListModal(true)}
            >
              Settings
            </span>

            {showUpdateListModal && (
              <UpdateListModal
                handleClose={() => setShowUpdateListModal(false)}
                handleDelete={() => {
                  setShowUpdateListModal(false);
                  setShowDeleteListModal(true);
                }}
              />
            )}
            {showDeleteListModal && (
              <DeleteListModal
                handleClose={() => setShowDeleteListModal(false)}
                handleCancel={() => {
                  setShowDeleteListModal(false);
                  setShowUpdateListModal(true);
                }}
              />
            )}
          </div>

          <div>
            <button
              className="rounded-full bg-gradient-to-br from-[#8B6BF6] to-[#6F44F7] px-14 py-3 text-[#FFFFFF] transition-all duration-300 ease-in-out hover:scale-110"
              onClick={() => setShowCreateTaskModal(true)}
            >
              <span className="flex items-center justify-center space-x-2">
                <FaPlus />
                <span className="-mb-0.5">Add Task</span>
              </span>
            </button>

            {showCreateTaskModal && (
              <CreateTaskModal
                handleClose={() => setShowCreateTaskModal(false)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="my-10 flex h-full flex-col space-y-2 overflow-scroll pb-40">
        <TaskItem />
      </div>
    </section>
  );
};

export default TaskManager;

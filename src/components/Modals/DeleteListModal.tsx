import { type FC } from "react";
import { api } from "~/_utils/api";
import Modal from "~/components/Modals/Modal";

interface DeleteListModalProps {
  handleClose: () => void;
  handleCancel: () => void;
  listId: string;
  listName: string;
  taskCount: number;
}

const DeleteListModal: FC<DeleteListModalProps> = ({
  handleClose,
  handleCancel,
  listId,
  listName,
  taskCount,
}) => {
  const { mutate: deleteList, isPending } = api.list.deleteList.useMutation({
    onSuccess: () => {
      handleClose();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = () => {
    deleteList({
      listId: listId,
    });
  };

  return (
    <Modal handleClose={handleClose}>
      <div className="flex w-full max-w-[350px] flex-col space-y-8">
        <h2 className="text-4xl font-medium text-[#8C8CCF]">Delete List</h2>

        <p className="text-lg font-light text-[#FFFFFF]">
          Are you sure you want to delete the{" "}
          <span className="font-semibold">&quot;{listName}&quot;</span> list and
          all of its {taskCount} task(s)?
        </p>

        <div className="flex items-center justify-start space-x-14">
          <button
            className="rounded-full bg-gradient-to-br from-[#F66B6B] to-[#F74444] px-14 py-3 text-[#FFFFFF] transition-all duration-300 ease-in-out hover:scale-110"
            onClick={handleSubmit}
            disabled={isPending}
          >
            <span className="flex items-center justify-center space-x-2">
              <span className="-mb-0.5">
                {isPending ? "Loading..." : "Yes, Delete!"}
              </span>
            </span>
          </button>

          <span
            className="cursor-pointer text-[#8C8CCF] hover:underline"
            onClick={handleCancel}
          >
            Cancel
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteListModal;

import { type FC } from "react";
import Modal from "~/components/Modals/Modal";

interface DeleteTaskModalProps {
  handleClose: () => void;
}

const DeleteTaskModal: FC<DeleteTaskModalProps> = ({ handleClose }) => {
  return (
    <Modal handleClose={handleClose}>
      <div className="flex w-full max-w-[350px] flex-col space-y-8">
        <h2 className="text-4xl font-medium text-[#8C8CCF]">Delete Task</h2>

        <p className="text-lg font-light text-[#FFFFFF]">
          Are you sure you want to delete this task?
          <br />
          <span className="font-semibold">
            &quot;Code my way to death...&quot;
          </span>
        </p>

        <div className="flex items-center justify-start space-x-14">
          <button className="rounded-full bg-gradient-to-br from-[#F66B6B] to-[#F74444] px-14 py-3 text-[#FFFFFF] transition-all duration-300 ease-in-out hover:scale-110">
            <span className="flex items-center justify-center space-x-2">
              <span className="-mb-0.5">Yes, Delete!</span>
            </span>
          </button>

          <span
            className="cursor-pointer text-[#8C8CCF] hover:underline"
            onClick={handleClose}
          >
            Cancel
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTaskModal;

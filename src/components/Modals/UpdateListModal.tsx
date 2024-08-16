import { type FC } from "react";
import Modal from "~/components/Modals/Modal";

interface UpdateListModalProps {
  handleClose: () => void;
  handleDelete: () => void;
}

const UpdateListModal: FC<UpdateListModalProps> = ({
  handleClose,
  handleDelete,
}) => {
  return (
    <Modal handleClose={handleClose}>
      <div className="flex w-full max-w-[350px] flex-col space-y-8">
        <h2 className="text-4xl font-medium text-[#8C8CCF]">Rename List</h2>

        <input
          type="text"
          placeholder="List Name"
          className="w-full rounded-xl bg-[#121215] py-4 pl-6 text-[#84849D] placeholder:text-[#84849D]/50 focus:outline-none"
        />

        <div className="flex items-center justify-start space-x-14">
          <button className="rounded-full bg-gradient-to-br from-[#8B6BF6] to-[#6F44F7] px-14 py-3 text-[#FFFFFF] transition-all duration-300 ease-in-out hover:scale-110">
            <span className="flex items-center justify-center space-x-2">
              <span className="-mb-0.5">Save Changes</span>
            </span>
          </button>

          <span
            className="cursor-pointer text-[#8C8CCF] hover:underline"
            onClick={handleClose}
          >
            Cancel
          </span>
        </div>

        <div className="py-6">
          <hr className="border-[#2F2D36]" />
        </div>

        <button
          className="rounded-full bg-gradient-to-br from-[#F66B6B] to-[#F74444] px-14 py-3 text-[#FFFFFF] transition-all duration-300 ease-in-out hover:scale-110"
          onClick={handleDelete}
        >
          <span className="flex items-center justify-center space-x-2">
            <span className="-mb-0.5">Delete List</span>
          </span>
        </button>
      </div>
    </Modal>
  );
};

export default UpdateListModal;

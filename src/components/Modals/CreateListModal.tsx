import { useState, type FC } from "react";
import { api } from "~/_utils/api";
import Modal from "~/components/Modals/Modal";

interface CreateListModalProps {
  handleClose: () => void;
  refetchList: () => void;
}

const CreateListModal: FC<CreateListModalProps> = ({
  handleClose,
  refetchList,
}) => {
  const [listName, setListName] = useState("");

  const { mutate: createList, isPending } = api.list.createList.useMutation({
    onSuccess: () => {
      refetchList();
      handleClose();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = () => {
    if (listName && listName.length <= 25) {
      createList({
        listName: listName,
      });
    } else {
      alert(
        "List Name of less than 25 characters is required to create a new list!",
      );
    }
  };

  return (
    <Modal handleClose={handleClose}>
      <div className="flex w-full max-w-[350px] flex-col space-y-8">
        <h2 className="text-4xl font-medium text-[#8C8CCF]">Create a List</h2>

        <input
          type="text"
          placeholder="List Name"
          className="w-full rounded-xl bg-[#121215] py-4 pl-6 text-[#84849D] placeholder:text-[#84849D]/50 focus:outline-none"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />

        <div className="flex items-center justify-start space-x-14">
          <button
            className="rounded-full bg-gradient-to-br from-[#8B6BF6] to-[#6F44F7] px-14 py-3 text-[#FFFFFF] transition-all duration-300 ease-in-out hover:scale-110"
            onClick={handleSubmit}
            disabled={isPending}
          >
            <span className="flex items-center justify-center space-x-2">
              <span className="-mb-0.5">
                {isPending ? "Loading..." : "Create List"}
              </span>
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

export default CreateListModal;

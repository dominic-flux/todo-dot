import { type NextPage } from "next";
import { useState } from "react";
import { api } from "~/_utils/api";

import Authentication from "~/components/Authentication/Authentication";
import PageHeader from "~/components/Layout/PageHeader";
import ListManager from "~/components/List/ListManager";
import TaskManager from "~/components/Task/TaskManager";

const TodoApp: NextPage = () => {
  const {
    data: lists,
    refetch,
    isFetching: loadingList,
  } = api.list.fetchLists.useQuery();
  const [selectedList, setSelectedList] = useState("");

  return (
    <Authentication>
      <div className="h-screen w-screen bg-[#121215]">
        <div className="flex size-full flex-col items-center justify-center space-y-12 px-52 py-20">
          <PageHeader />

          <main className="flex size-full items-stretch justify-between space-x-20">
            <ListManager
              lists={lists ?? []}
              selectedList={selectedList}
              setSelectedList={setSelectedList}
              refetchList={refetch}
              loadingList={loadingList}
            />

            {lists?.find((l) => l.id === selectedList) && (
              <TaskManager
                list={lists?.find((l) => l.id === selectedList)}
                refetchList={refetch}
              />
            )}
          </main>
        </div>
      </div>
    </Authentication>
  );
};

export default TodoApp;

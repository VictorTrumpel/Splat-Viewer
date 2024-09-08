import { HelloWindow, WorkMenu } from "@widgets";
import { useAppSelector } from "../shared/hooks";

export const App = () => {
  const menuPage = useAppSelector((store) => store.menuRouterStore.menuPage);

  return (
    <>
      {menuPage === "startPage" && <HelloWindow />}
      {menuPage === "workArea" && <WorkMenu />}
    </>
  );
};

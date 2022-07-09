import classNames from "classnames";
import { useRouter } from "next/router";
import icons from "../Icons";

// Route table
export const routes = {
  "/": "Dashboard",
  "/permit": "Permit",
  "/payment": "Payment",
  "/report": "Report",
  "/gethelp": "Get Help",
  "/settings": "Settings",
};

function Sidebar() {
  return (
    <div className="p-4 grid grid-rows-6 h-full">
      <div className="grid place-content-center border-b  row-span-1">
        <div>
          <p className="lg:text-2xl md:text-xl font-extrabold">Park Permit</p>
          <span className="text-xs text-right block font-bold">
            by peter park
          </span>
        </div>
      </div>

      <div className=" space-y-5 my-5 row-span-4 overflow-scroll">
        <ActiveLink path="/" text="Dashboard" icon="home" />
        <ActiveLink path="/permit" text="Permit" icon="ticket" />
        <ActiveLink path="/payment" text="Payment" icon="card" />
        <ActiveLink path="/report" text="Report" icon="report" />
      </div>

      <div className=" row-span-1 space-y-5 ">
        <ActiveLink path="/gethelp" text="Get Help" icon="help" />
        <ActiveLink path="/settings" text="Settings" icon="settings" />
      </div>
    </div>
  );
}

function ActiveLink({
  path,
  icon,
  text,
}: {
  path: string;
  icon: string;
  text: string;
}) {
  const router = useRouter();
  const active = router.asPath === path;
  const ActiveLinkClassNames = classNames(
    active
      ? "bg-primary text-white font-extrabold rounded-[12px]"
      : "text-greyscale600"
  );

  const handleClick = () => {
    router.push(path);
  };

  return (
    <div
      onClick={handleClick}
      className={`${ActiveLinkClassNames} cursor-pointer flex space-x-5 px-5 py-2 items-center`}
    >
      <span>{icons[icon]}</span>
      <span>{text}</span>
    </div>
  );
}

export default Sidebar;

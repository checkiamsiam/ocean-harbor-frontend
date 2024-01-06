import GAButton from "@/components/ui/GAButton";
import ReactTimeago from "react-timeago";

const NotificationPopover = () => {
  return (
    <div className="sm:w-[400px] w-[220px] h-[400px]  overflow-y-auto ">
      <div className="flex flex-wrap justify-between items-center">
        <h3>Notification</h3>
        <GAButton size="small">Mark As Read</GAButton>
      </div>

      <div className="mt-2">
        <h5>Earlier</h5>
        <div className="mt-2">
          <div className="flex items-center mt-2 hover:bg-gray-200 bg-gray-50 rounded-lg p-2 cursor-pointer w-full">
            <div className="ml-3">
              <div className="flex gap-10 justify-between">
                <p className="font-semibold text-sm">Quotation Given for you</p>
                <p className="text-sm text-blue-500 ">
                  <ReactTimeago date="2024-01-05T12:14:28.576Z" />
                </p>
              </div>
              <p className="text-sm">Your quotation req for O-000000 is given</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopover;

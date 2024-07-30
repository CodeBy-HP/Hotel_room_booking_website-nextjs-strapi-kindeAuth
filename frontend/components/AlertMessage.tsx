import { Alert, AlertTitle } from "./ui/alert";
import { FaInfoCircle } from "react-icons/fa";

const AlertMessage = ({ message, type }: { message: any; type: any }) => {
  return (
    <Alert
      className={`rounded-none ${
        type === "error" ? "bg-red-500 text-white" : "bg-green-500 text-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="text-xl w-[44px] h-[44px] flex justify-center items-center">
          <FaInfoCircle />
        </div>
        <AlertTitle className="text-white flex-1 font-secondary text-base leading-snug">
          {message}
        </AlertTitle>
      </div>
    </Alert>
  );
};

export default AlertMessage;

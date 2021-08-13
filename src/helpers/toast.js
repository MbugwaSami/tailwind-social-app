import { toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastNotification = (actionType, message) => {
  toast.configure();
  const Zoom = cssTransition({
    enter: "zoomIn",
    exit: "zoomOut",
  });
  switch (actionType) {
    case "success":
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        transition: Zoom,
        style: { background: "#0D8A18" },
      });
      break;
    case "error":
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        transition: Zoom,
        style: { background: "#E72509" },
        autoClose: 5000,
        pauseOnHover: true,
      });
      break;
    default:
  }
};

/* eslint-disable prettier/prettier */
import { createContext, useState, useContext, ReactNode } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type AlertType = {
  severity: "error" | "success";
  message: string;
};

type AlertContextType = {
  showAlert: (alert: AlertType) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<AlertType | null>(null);
  const [open, setOpen] = useState(false);

  const showAlert = (alert: AlertType) => {
    setAlert(alert);
    setOpen(true);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          onClose={() => setOpen(false)}
          autoHideDuration={3000}
        >
          <Alert severity={alert.severity}>{alert.message}</Alert>
        </Snackbar>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

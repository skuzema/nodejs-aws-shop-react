import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File | undefined>(undefined);
  const [alert, setAlert] = React.useState<{
    severity: "error" | "success";
    message: string;
  } | null>(null);
  const [open, setOpen] = React.useState(false);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const uploadFile = async () => {
    if (!file) {
      setAlert({ severity: "error", message: "No file selected" });
      setOpen(true);
      return;
    }

    console.log("uploadFile to", url);

    // Get the authorization token from localStorage
    const authorization_token = localStorage.getItem("authorization_token");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headers: any = {};
    console.log("authorization_token:", authorization_token);
    if (authorization_token) {
      headers.Authorization = `Basic ${authorization_token}`;
    }
    console.log("headers.Authorization:", headers.Authorization);
    try {
      // Get the presigned URL with authorization header
      const response = await axios({
        method: "GET",
        url,
        params: {
          name: encodeURIComponent(file.name),
        },
        headers,
      });

      console.log("File to upload: ", file.name);
      console.log("Uploading to: ", response.data.url);
      const result = await fetch(response.data.url, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });
      console.log("Result: ", result);
      setFile(undefined);
      setAlert({ severity: "success", message: "File uploaded successfully!" });
      setOpen(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setAlert({
            severity: "error",
            message:
              "Error 401: Unauthorized! Please setup 'authorization_token' in browser localStorage.",
          });
        } else if (error.response?.status === 403) {
          setAlert({
            severity: "error",
            message:
              "Error 403: Forbidden! Access is denied for this user (invalid authorization_token).",
          });
        } else {
          setAlert({
            severity: "error",
            message: "Error uploading file: " + error.message,
          });
        }
      } else {
        setAlert({
          severity: "error",
          message: "Error uploading file!",
        });
      }
      setOpen(true);
    }
  };

  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {alert && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Alert severity={alert.severity}>{alert.message}</Alert>
        </Snackbar>
      )}
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </Box>
  );
}

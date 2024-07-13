/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAlert } from "~/components/AlertContext/AlertContext";
import axios from "axios";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File | undefined>(undefined);
  const { showAlert } = useAlert();

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
      showAlert({ severity: "error", message: "No file selected" });
      return;
    }

    console.log("uploadFile to", url);

    const authorization_token = localStorage.getItem("authorization_token");
    const headers: any = {};
    if (authorization_token) {
      headers.Authorization = `Basic ${authorization_token}`;
    }
    try {
      const response = await axios({
        method: "GET",
        url,
        params: {
          name: encodeURIComponent(file.name),
        },
        headers,
      });

      const result = await fetch(response.data.url, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });
      console.log("Result: ", result);
      setFile(undefined);
      showAlert({
        severity: "success",
        message: "File uploaded successfully!",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          showAlert({
            severity: "error",
            message:
              "Error 401: Unauthorized! Please setup 'authorization_token' in browser localStorage.",
          });
        } else if (error.response?.status === 403) {
          showAlert({
            severity: "error",
            message:
              "Error 403: Forbidden! Access is denied for this user (invalid authorization_token).",
          });
        } else {
          showAlert({
            severity: "error",
            message: "Error uploading file: " + error.message,
          });
        }
      } else {
        showAlert({
          severity: "error",
          message: "Error uploading file!",
        });
      }
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
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

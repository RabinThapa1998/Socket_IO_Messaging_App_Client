import React, { useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

import styles from "./dashboard.module.css";
const DashboardPage = () => {
  // Register the plugins
  const [files, setFiles] = useState([]);
  console.log(
    "🚀 ~ file: dashboard.page.tsx ~ line 12 ~ DashboardPage ~ files",
    files
  );
  return (
    <div>
      <h1>Dashboard</h1>
      <div className={styles.filePondContainer}>
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={3}
          name="files"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      </div>
    </div>
  );
};

export default DashboardPage;

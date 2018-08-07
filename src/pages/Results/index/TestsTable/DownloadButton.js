import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FileDownloadIcon from '@material-ui/icons/FileDownload';
import {BACKEND_URL} from "../../../../constants/endpoints";


export const DownloadButton = (id_order) =>
  <IconButton
    href={`${BACKEND_URL}/objects/${id_order}/csv`}
    title="Скачать CSV"
    download>
    <FileDownloadIcon/>
  </IconButton>;

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import {BACKEND_URL} from "../../../../../constants/endpoints";


export const DownloadButton = (id_order) =>
  <IconButton
    href={`${BACKEND_URL}/objects/${id_order}/csv`}
    title="Скачать CSV"
    download>
    <SaveAltIcon/>
  </IconButton>;

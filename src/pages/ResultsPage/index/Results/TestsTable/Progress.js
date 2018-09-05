import React from 'react';
import TestProgress from "./TestProgress";


export const Progress =  ({all, now, value, style}) => {
  return (
    <TestProgress all={all} now={now}/>
  )
};

import React from 'react';
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";

const fields = [
  {
    label: 'URL Jenkins',
    key: 'uri',
  },
  {
    label: 'Имя Джобы',
    key: 'jobName',
  },
  {
    label: 'Полный URL джобы',
    key: 'job_url',
  },
  {
    label: 'Пароль',
    key: 'password',
  },
  {
    label: 'Токен',
    key: 'token',
  },
  {
    label: 'Логин',
    key: 'login',
  },
];

export default function ({...props}) {
  return (
    <Dialog open={props.isOpen}
            transitionDuration={0}
            onClose={props.onClose}>
      <DialogTitle>Параметры Jenkins</DialogTitle>
      <DialogContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Параметр</TableCell>
              <TableCell>Значение</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map(field =>
              props.jobTrigger[field.key] &&
              <TableRow key={field.key}>
                <TableCell>{field.label}</TableCell>
                <TableCell>{props.jobTrigger[field.key]}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  )
}

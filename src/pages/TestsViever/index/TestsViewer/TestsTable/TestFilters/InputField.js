import React from 'react';
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/es/Input/Input";

export default (function InputField({id, label, value, placeholder = 'Введите текст', onChange}) {
  return (
      <FormControl fullWidth={true} margin={'dense'}>
        <InputLabel>Поиск по имени</InputLabel>
        <Input id={id}
               onChange={onChange}
               fullWidth={true}
               placeholder={placeholder}
               type={'text'}
               value={value}/>
      </FormControl>
  )
})

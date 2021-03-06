import React, {
  forwardRef,,
  useImperativeHandle
} from 'react'

interface FormProps {
  initialData?: string;
}

export interface FormRef {
  submit(): void;
}

const Form: React.RefForwardingComponent<FormRef, FormProps> = (props, ref) => {

  const submit = () => {
    alert('Form sended success')
  }

  
  useImperativeHandle(ref, () => ({
    submit,
  }))

  return (
    <form action="">
      <input type="text" name="" id=""/>
      <input type="text" name="" id=""/>
      <input type="text" name="" id=""/>
    </form>
  )
}

export default forwardRef(Form)

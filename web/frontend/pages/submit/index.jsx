import React, { useState } from 'react'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

const Submit = () => {
  const [show, setShow] = useState(false)
  const handleSubmit = async () => {
    try {
      setShow(true)
    } catch (error) {
      console.log('error :>> ', error)
    }
  }

  console.log('show :>> ', show)

  return (
    <>
      <Button content={<p>Testing</p>} onClick={() => handleSubmit()} />
      {show && <Modal />}
    </>
  )
}

export default Submit

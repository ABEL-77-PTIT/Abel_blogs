import React from 'react'
import Button from '../../components/Button'

const Submit = () => {
  const handleSubmit = async () => {
    try {
      let data = {}
      console.log('data :>> ', data)
    } catch (error) {
      console.log('error :>> ', error)
    }
  }

  return <Button content={<p>Testing</p>} onClick={() => handleSubmit()} />
}

export default Submit

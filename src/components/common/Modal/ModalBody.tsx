import React from 'react'

interface ModalBodyProps {
  body: React.ReactElement
}

function ModalBody({ body }: ModalBodyProps) {
  return (
    <div className="relative py-4 px-6 flex-auto">{body}</div>
  )
}

export default ModalBody
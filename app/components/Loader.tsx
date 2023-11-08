import React from 'react'

type Props = {message?: string}

const Loader = (props: Props) => {
  const {message} = props;
  return (
    <div className='loader_wrapper'>
      <span className="loader">{message || 'Loading...'}</span>
    </div>
  )
}

export default Loader
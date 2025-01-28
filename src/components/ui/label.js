import React from 'react'

const Label = React.forwardRef((props, ref) => {
  return (
    <label
      ref={ref}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${props.className}`}
      {...props}
    />
  )
})

Label.displayName = 'Label'

export { Label }
import React from 'react'

export default function Alert(props) {
  const capitalize = {
    textTransform: "Capitalize"
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong style={capitalize}>{props.alert.type}</strong> {props.alert.msg}
    </div>
  )
}

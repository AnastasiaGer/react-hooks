import React from 'react'
import { AlertContex } from './alertContex'

export const AlertState = ({children}) => {

  return (
    <AlertContex.Provider>
{     children}
    </AlertContex.Provider>
  )
}
import React, { useEffect, useRef } from 'react'
import initPrintTool from './print-tool-init'
import './print-prep-original.css'

export default function PrintPrepTool() {
  const rootRef = useRef(null)

  useEffect(() => {
    const destroy = initPrintTool(rootRef.current)
    return () => { if (typeof destroy === 'function') destroy() }
  }, [])

  return (
    <div id="print-tool-root" ref={rootRef} style={{ paddingTop: '12px', paddingBottom: '12px' }} />
  )
}

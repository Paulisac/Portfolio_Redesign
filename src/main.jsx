import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Filter out known non-actionable development warnings (React Router future flags)
const _warn = console.warn.bind(console)
console.warn = (...args) => {
  try{
    const m = args[0]
    if(typeof m === 'string' && m.includes('React Router Future Flag Warning')) return
  }catch(e){}
  _warn(...args)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

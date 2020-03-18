import React from 'react'
import { createRoot } from 'react-dom'

import { setState } from '@/storage'
import App from '@/App'

const Options = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{ width: 980, minHeight: 300, margin: '10vh auto' }}
        className="Box mb-3 Box--condensed table files"
      >
        <App />
      </div>
    </div>
  )
}

chrome.storage.sync.get('token', ({ token }) => {
  setState(state => {
    state.token = token
    state.repoDetails = {
      user: 'brumm',
      repo: 'tako',
      branch: 'master',
      path: '',
    }
    state.initialTableHeight = 300
  })

  createRoot(document.querySelector('#root')).render(<Options />)
})

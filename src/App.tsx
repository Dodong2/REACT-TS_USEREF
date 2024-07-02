import { lazy, Suspense } from 'react'
import './App.css'

function App() {

  const UseRef1 = lazy(() => import('./pages/UseRef1'))

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <UseRef1 />
    </Suspense>
    </>
  )
}

export default App

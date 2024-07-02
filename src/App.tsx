import { lazy, Suspense } from 'react'
import './App.css'

function App() {

  const Title = lazy(() => import('./pages/TitlePage'))
  const UseRef1 = lazy(() => import('./pages/UseRef1'))
  const UseRef2 = lazy(() => import('./pages/UserRef2'))
  const UseRef3 = lazy(() => import('./pages/UserRef3'))

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Title/>
    <UseRef1 />
    <UseRef2/>
    <UseRef3/>
    </Suspense>
    </>
  )
}

export default App

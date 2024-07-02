//Step 1: Creating Custom Hooks with useRef
import { useRef, useEffect } from 'react'

const UsePrevious= <T,>(value: T): T | undefined => {
    const ref = useRef<T>()

    useEffect(() =>{
        ref.current = value
    }, [value])

  return (
    ref.current
  )
}

export default UsePrevious
//Step 1: Storing Mutable Values
import { useRef, useState, useEffect } from 'react'

const Timer:React.FC = () => {

    const [count, setCount] = useState<number>(0)
    const countRef = useRef<number>(0)
    const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            countRef.current += 1
            setCount(countRef.current)
        }, 1000)
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

  return (
    <>
        <div>
            <h2>Timer: {count} seconds</h2>
        </div>
    </>
  )
}

export default Timer
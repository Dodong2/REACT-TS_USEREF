//Step 2: Creating Custom Hooks with useRef
import { useState } from "react"
import UsePrevious from "../components/UsePrevious"

const UserRef3 = () => {
    const [count, setCount] = useState<number>(0)
    const PrevCount = UsePrevious(count)

  return (
    <div>
        <h1>useRef 3</h1>
        <h2>Current Count: {count}</h2>
        <h2>Previous Count: {PrevCount}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UserRef3
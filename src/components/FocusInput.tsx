//Step 1: Creating a Reference to a DOM Element
import { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <div>
            <input ref={inputRef} type='text' placeholder='Focus me'/>
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}

export default FocusInput
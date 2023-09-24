import { useRef, useEffect } from 'react'

/**
 * Hook that return clicks outside of the passed ref
 */
export function useOuterClick(callback) {
  const callbackRef = useRef()
  const innerRef = useRef()

  // update cb on each render, so second useEffect has access to current value
  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    const handleClick = (e) => {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      )
        callbackRef.current(e)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, []) // no dependencies -> stable click listener

  return innerRef // convenience for client (doesn't need to init ref himself)
}

export default useOuterClick

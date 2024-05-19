import { RefObject, useEffect, useState } from "react"

export function useHover<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>, delay = 0): boolean {
  const [value, setValue] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    let timerId = 0
    if (!element) return

    const handleMouseEnter = () => (timerId = window.setTimeout(() => setValue(true), delay))

    const handleMouseLeave = () => {
        clearTimeout(timerId)
        timerId = 0
        setValue(false)
    }

    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [elementRef, delay])

  return value
}

import { useEffect, useState, useRef } from "react"

const useIntersect = (options, once = false) => {
  const observable = useRef()
  const [observer, setObserver] = useState(null)
  const [inView, setInview] = useState(null)
  const [viewRatio, setViewRatio] = useState(0)

  useEffect(() => {
    // check if intersectionObserver is supported, return
    if ("IntersectionObserver" in window === false) return

    if (!observer) {
      setObserver(
        new IntersectionObserver(([entry]) => {
          setInview(entry.isIntersecting)
          setViewRatio(entry.intersectionRatio)
        }, options)
      )
    }

    const current = observable.current

    if (observer && current && once && inView) {
      return () => observer.unobserve(current)
    }

    if (observer && observable.current) {
      observer.observe(current)
    }
    return () => {
      if (observer && observable.current) {
        observer.unobserve(current)
      }
    }
  }, [observable, inView, options, once, observer])
  return {
    observable,
    inView,
    viewRatio,
  }
}

export default useIntersect

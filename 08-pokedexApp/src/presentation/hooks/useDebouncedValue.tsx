import { useEffect, useState } from 'react'

export const useDebouncedValue = (input: string = "", time: number = 500) => {
  const [debouncedValued, setDebouncedValued] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValued(input)
    }, time)

    return () => {
      clearTimeout(timeout)
    }
  }, [input]);

  return debouncedValued;
}

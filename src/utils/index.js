import {
   useEffect,
   useState
} from "react"

export const isFalse = value => value === 0 ? false : !value
export const cleanObject = (object) => {
   const result = {
      ...object
   }
   Object.keys(object).forEach(key => {
      const value = result[key]
      if (isFalse(value)) {
         delete result[key]
      }

   })
   return result
}
export const useMount = (callBack) => {
   useEffect(() => {
      callBack()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

}
export const useDebounce = (value, delay) => {
   const [debouncedValue, setDebouncedValue] = useState(value)
   useEffect(() => {
      const timeOut = setTimeout(() => {
         setDebouncedValue(value)
      }, delay)
      return () => clearTimeout(timeOut)
   }, [value, delay])
   return debouncedValue

}
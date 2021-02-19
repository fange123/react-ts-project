import React, {
   useEffect,
   useState
} from 'react'

export const isFalse = (value:unknown) => value === 0 ? false : !value
export const cleanObject = (object:object) => {
   const result = {
      ...object
   }
   Object.keys(object).forEach(key => {
      // @ts-ignore
      const value = result[key]
      if (isFalse(value)) {
         //@ts-ignore
         delete result[key]
      }

   })
   return result
}
export const useMount = (callBack:()=>void) => {
   useEffect(() => {
      callBack()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

}
//后面要用泛型来定义

export const useDebounce = (value:unknown, delay?:number):any => {
   const [debouncedValue, setDebouncedValue] = useState(value)
   useEffect(() => {
      const timeOut = setTimeout(() => {
         setDebouncedValue(value)
      }, delay)
      return () => clearTimeout(timeOut)
   }, [value, delay])
   return debouncedValue

}
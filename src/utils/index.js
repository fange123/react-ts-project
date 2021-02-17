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

//use type wizard
export const asyncErorHandler = async (
  fn: Function,
  ...args: any

) => {
  try {
    return await fn(...args);
  } catch (error) {
    throw error;
  }
}



// export const asyncErorHandler = async (
//   fn: Function,
//   ...args: any
// ): Promise<any> => {
//   try {
//     return await fn(...args);
//   } catch (error) {
//     throw error;
//   }
// }

// export default function courseReducer  (state = [], action) {
//   switch (action.type) {
//       case 'CREATE_COURSE':
//       return [...state, Object.assign({}, action.course)]
//       default:
//       return state
//   }
// };

export default function courseReducer  (state = [], action) {
  switch (action.type) {
      case 'LOAD_COURSES_SUCCEESS':
      return action.courses
      default:
      return state
  }
};
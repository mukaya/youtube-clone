const initialState = {
    data:[],
    loading:true
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
      case 'GET_DATA':
          return {
              ...state,
              data:action.payload
          }
      case 'LOADING':
          return {
              ...state,
              loading: action.payload
          }
    }
    return state;
}
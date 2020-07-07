const initialState = false

export const themeReducer = (state = initialState, action)=>{
    switch(action.type){
      case 'CHANGE_THEME':
            return action.payload
    }
    return state;
}
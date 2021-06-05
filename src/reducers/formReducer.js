export default function FormReducer(state=1, action){
    switch(action.type){
        case 'SET':
            state = action.payload;
            return state;
            
        default:
            return state;
    }
}

export default function reducer( state = { btnColorType:true }, action ){
    switch( action.type ){
        case "BUTTON_TYPE":{
            return {...state, btnColorType:action.btnColorType}
            break;
        }
        
        default:{
            return state;
        }
    }
}
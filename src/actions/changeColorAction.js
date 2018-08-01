export function changeColorAction(btnColorType){
    
    return function(dispatch){
        dispatch({'type':'BUTTON_TYPE', 'btnColorType':btnColorType});
    }
}
import Path from './path.js'
import Views from '../containers'

function Route() {
//    let objKeys = Object.keys(Containers)
    let routes = {};
    let i;
    console.log("paht",Path)
    for (i in Path){
        console.log("in path loop")
        if (Views[i]) {
           routes[i] = {
            Path:Path[i],
            View:Views[i],
           } 
           console.log("in loop",routes)
           continue
        }    
    }
    return routes
}

export const Redirect = ()=> {
    return 
}



export default Route
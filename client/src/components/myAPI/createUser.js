import fb from './Backend/FB-Config.js';

//elementID & eventType are strings. data will be the state
function createUser(elementID, eventType, data){
    document.getElementById(elementID).addEventListener(eventType, fetcher(data) )
}
function fetcher(data){
    fetch('/createuser', {
        method:'post',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
           data
          })
    })
}

export default createUser();
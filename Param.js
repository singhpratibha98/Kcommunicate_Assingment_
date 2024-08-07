
var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

function getUrlParameterValue(url, parameter) {
    let queryString = url.split('?')[1];
    
    if (!queryString) {
        return null; 
    }
    
    let params = queryString.split('&');
    
    for (let i = 0; i < params.length; i++) {
        let paramPair = params[i].split('=');
        
        let key = decodeURIComponent(paramPair[0]);
        let value = decodeURIComponent(paramPair[1]);
        
        if (key === parameter) {
            return value;  
        }
    }
    
    return null; 
}

console.log(getUrlParameterValue(url, "utm_medium")); 
console.log(getUrlParameterValue(url, "utm_campaign")); 

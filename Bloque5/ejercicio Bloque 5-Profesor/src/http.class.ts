"use strict";

export class Http {
    static ajax(method, url, data = null) { // Returns Promise<Object> with the server's resturned JSON
        return new Promise((resolve, reject) => {
            var http = new XMLHttpRequest();
            http.open(method, url, true);
            http.setRequestHeader("Content-type", "application/json");  
            http.send(JSON.stringify(data));
        
            http.addEventListener('load', (event) => {
                if (http.status === 200) {
                    try {
                        resolve(JSON.parse(http.responseText));
                    } catch(error) {
                        reject(`Server response is not valid JSON: ${http.responseText}`);
                    }
                } else {
                    reject(`${http.status}: ${http.statusText}`);
                }
            });

            http.addEventListener('error', (event) => {
                reject(`Error in AJAX call to ${url} by ${method}`);
            });
        });    
    }
}

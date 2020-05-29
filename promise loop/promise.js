let request = require('request');
for(let i = 0, get_total = Promise.resolve(); i<10; i++){
    get_total = get_total.then(()=> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(i), console.log("hi");
            }, 1000);
        });
    })
    .then((i) => {
        console.log(i);
    });
    console.log("get_total : ", get_total);
}
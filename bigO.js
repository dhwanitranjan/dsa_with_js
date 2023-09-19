const nemo = ['nemo', 'dori'];
const large = new Array(1000000).fill('nemo');
function findNemo (arr){
    let count = 0;
    let t0 = performance.now();
    for (let i = 0; i < arr.length; i++){
        if (arr[i] ==='nemo'){
            count++;
        }
    }
    let t1 = performance.now();
    console.log('runtime:' + t1-t0, count);
    // runtime depends on the system, language 
}

findNemo(nemo); // O(n)
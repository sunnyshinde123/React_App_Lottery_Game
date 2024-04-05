function generateLotteryNum(n){
    let arr=new Array(n);
    for(let i=0;i<arr.length;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr){
    let sum=arr.reduce((sum, value)=> sum+value, 0);
    return sum;
}


export {generateLotteryNum, sum};
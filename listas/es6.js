let n = 2;
console.log([3,5,7,3,9,6,24,36].reduce((l1,l2)=>l1 + l2))
console.log([3,5,7,3,9,6,24,36].filter((l)=>l%n===0))
console.log([1,2,3,4,5,6,7,8,9,10].filter((l)=>{
for(let i=0;i<l;i++){
if(l%i===0){
    return false;
} else {
    return true;
}
}
}
))
let n = 4876589673489538945689345
let primos = [];

function primeFactors (n) {
    for(let i = 2;i<=n;i++){
        while(n%i==0){
            primos.push(i);
            n = n/i;
        }
    }
    console.log(primos);
}

primeFactors(n);
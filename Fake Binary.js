function fakeBin(x){
    let res = '';
    for (let i = 0; i < x.length; i++){
        x[i] < 5 ? res += 0 : res += 1;}
    return res;
}
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i += 1){
        let ele = haystack[i];
        if (String(ele) === 'needle'){
            return "found the needle at position " +  haystack.indexOf(ele);

        }
    }
}
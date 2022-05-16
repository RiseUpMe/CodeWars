function howMuchWater(water, load, clothes){
    if(clothes <=(2*load) && clothes >=load ){
        return Math.round(water * Math.pow(1.1, clothes-load)*100)/100;
    }
    else if (clothes < load){
        return('Not enough clothes');
    }
    else if (clothes > 2*load){
        return('Too much clothes');
    }


}
function getGrade (s1, s2, s3) {
    if( ((s1+s2+s3)/3) >=90 &&  ((s1+s2+s3)/3) <=100){
        return 'A';
    }
    else if ( ((s1+s2+s3)/3) >=80 && ((s1+s2+s3)/3) <90){
        return 'B';}

    else if(((s1+s2+s3)/3) >=70 &&  ((s1+s2+s3)/3)<80 ){
        return 'C';}
    else if(((s1+s2+s3)/3)>=60 &&  ((s1+s2+s3)/3) <70 ){
        return 'D';}
    else if(((s1+s2+s3)/3)>=0 &&  ((s1+s2+s3)/3) <60 ){
        return 'F';}
}
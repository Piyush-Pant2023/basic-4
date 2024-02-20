function add(num){
    count=true
    for(i=2;i<num;i++){
        if(num%i==0){
count=false
        }
}if(count==false){
    console.log("number is composite")
}else{
    console.log("it is a prime number")
}
}
add(6)
var friendsArray = ['Chanchal', 'Torun', 'Tanzid', 'Ratin', 'Asif'];
for(var i= 0; i<friendsArray.length; i++){
    var friend = friendsArray[i];
    if(friendsArray.indexOf(friend) % 2 == 0 ){
        console.log("Hi Barbie");
    }
    else{
        console.log("You are prettier than a barbie!");
    }
}
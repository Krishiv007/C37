class Player{
   constructor(){}

   getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>(
            playeCount = data.val()
           )
         )
     } 

    update(count){
        database.ref('/').update({
        playerCount: count
        });
      }
}
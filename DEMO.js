const getApple = (b) => {
    setTimeout(() => {
      b({name: 'Macintosh'});
    }, 2000);
   };
   
   getApple((apple) => {
    console.log(apple.name);
   
   })
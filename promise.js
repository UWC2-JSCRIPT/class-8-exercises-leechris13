let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let a = Math.random()
    console.log(a)
    if (a > 0.5) {
      // console.log('complete')
      resolve();
    } else{
      reject()
    } 
    
  }, 1000);
});

myPromise
  .then(function() {
    console.log('success')
    console.log('complete')
  })
  .catch(function() {
    console.log('fail')
    console.log('complete');
  });


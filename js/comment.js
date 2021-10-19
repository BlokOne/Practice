const textpost = document.getElementById('textpost');
      btncomment = document.getElementById('btnYourcomment'); 
      commentpost = document.getElementById('commentpost');
      sumComments = document.getElementById('linesum');
    





let comments = [

];

const reversed = comments.reverse();

console.log(comments)

const storageComments = JSON.parse(localStorage.getItem('comments'));

if (storageComments && storageComments.length) {
    for(let i=0; i<storageComments.length; i++) {
    comments.push(storageComments[i])
    };
    for(let i=0; i<storageComments.length; i++){
    const newcomment = commentpost.cloneNode(true);
    newcomment.querySelector('h5').innerHTML =comments[i].user;
    newcomment.querySelector('strong').innerHTML = comments[i].text;
    let timepassed = 'now';
    let old = comments[i].time;
    let current = new Date();
    let timeminutes = Math.ceil(Math.abs(old - current.getTime()) / ( 1000 * 60)) ;
    console.log (timeminutes);
    let timehours = Math.round(Math.abs(old - current.getTime()) / (1000 * 60 * 60 ));
    let timedays = Math.round(Math.abs(old - current.getTime()) / (1000 * 60 * 60 * 24 )) ;
    console.log(timehours)
    if (timeminutes < 59) {
       timepassed = timeminutes + ' ' + 'minuts ago';
    }
    else if (timehours >= 1) {
       timepassed = timehours  + ' ' + 'hours ago';
    }
    else if (timedays >= 1) {
       timepassed = timedays + ' ' + 'days ago'; 
    }

    newcomment.querySelector('time').innerHTML = timepassed ; 
    document.getElementById('sumComments').prepend( newcomment );
    }  
    sumComments.querySelector('span').innerHTML = comments.length;
  };
  





btncomment.addEventListener("click", () => 
  {
  const comment = {
    user: document.querySelector("input[name='example']").value,
    text: document.querySelector("input[name='comment']").value,
    time:  Date.now(),
  };
  comments.push(comment);

    localStorage.setItem(
    'comments', 
    JSON.stringify(comments)
  );
  sumComments.querySelector('span').innerHTML = comments.length;
  addcomment();
  clearsky();
});




function addcomment() {
  const newcomment = commentpost.cloneNode(true);
  newcomment.querySelector('h5').innerHTML = document.querySelector("input[name='example']").value;
  newcomment.querySelector('strong').innerHTML = document.querySelector("input[name='comment']").value;
  newcomment.querySelector('time').innerHTML = 'now' ;
  document.getElementById('sumComments').prepend( newcomment );
}

function clearsky() {
  document.getElementById('Name').value="";
  document.getElementById('comment').value="";
}







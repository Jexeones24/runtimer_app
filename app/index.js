const store = { users: [], timers: [], runs: [] }
var getTimer;

$(function(){
  $('form a').bind('click', function(event){
    event.preventDefault();
    let userName = $("#username").val();
    user = new User(userName);
    console.log(store.users)
    $("#username").val(' ');
    // how to get to stopwatch.html w/o losing user
  })

  $('a#start').bind('click', function(event){
    // define and store startPoint
    // let run = new Run
    // run.start()
    let hours = $('span#hours')[0].innerText
    let minutes = $('span#minutes')[0].innerText
    let seconds = $('span#seconds')[0].innerText
    let timer = new Timer(run.id)
    timer.start()
  })

  $('a#stop').bind('click', function(timer){
    // how can i get the timer object here?
    timer.stop()
  })

  $('a#reset').on('click', function(){
    timer.reset()
  })

  $('a#results').on('click', function(){
    timer.results()
  })
})

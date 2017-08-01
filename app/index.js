const store = { users: [], timers: [], runs: [] }

$(function(){

  $('form a').bind('click', function(event){
    event.preventDefault();
    let userName = $("#username").val();
    user = new User(userName);
    console.log(store.users)
    $("#username").val(' ');
  })

  $('a#start').unbind('click', function(){
    // define and store startPoint
    let run = new Run
    let timer = new Timer(run.id) // make available w/o global??
    timer.start()
  })

  $('a#stop').on('click', function(){
    timer.stop()
  })

  $('a#reset').on('click', function(){
    timer.reset()
  })

  $('a#results').on('click', function(){
    timer.results()
  })
})

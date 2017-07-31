const store = { users: [], timers: [], runs: [] }

$(function(){
  // hoursEl = $('p span')[0]
  // minutesEl = $('p span')[1]
  // secondsEl = $('p span')[2]
  // get html elements
  $('a#start').on('click', function(){
    // initialize new runEvent
    // define and store startPoint
    runEvent = new RunEvent
    let runId = runEvent.id
    timer = new Timer(runId) // make available w/o global??
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

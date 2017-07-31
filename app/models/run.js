function createRun(){
  let id = 0
  return class {
    constructor(userId, startPoint, endPoint, beginTime, endTime){
      this.userId = userId;
      this.startPoint = startPoint;
      this.endPoint = endPoint;
      this.beginTime = beginTime;
      this.endTime = endTime;
      this.id = ++id;
      store.runs.push(this);
    }
    user(){
      return User.find(this.userId)
    }
    static find(id){
      return store.runs.filter((run) => run.id == id)[0]
    }
  }
}

let Run = createRun()
let user = new User('jess')
let secondUser = new User('jeff')
//
let run = new Run(user.id)
let secondrun = new Run(user.id)
let thirdrun = new Run(secondUser.id)

let runs = user.runs()
console.log(runs, 'these are the runs')


let latitude;
let longitude;
let endPoint;
let totalDistance;
const API_KEY = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDz4oPRDA5oeIdo4PP4wmowCqWxiewevoc"

//
// function makeApiCall(){
//   fetch(API_KEY).then(function(response) {
//     response = response.json();
//   }).then(function(response)
// }

function getStartPoint(){
  console.log("Start Point")
  let location = makeApiCall()
}

function getEndPoint(){
  // logs latitude and longitude of end point
  console.log("End Point")
}

function calculateDistance(){
  console.log("Total Distance")
}

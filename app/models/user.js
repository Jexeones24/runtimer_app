function createUser(){
  let id = 0
  return class {
    constructor(name){
      this.name = name;
      this.id = ++id;
      store.users.push(this);
    }
    static find(id){
      return store.users.filter(function(user){
        return user.id == id;
      })[0]
    }
    runs(){
      return store.runs.filter((run) => {
        return run.userId == this.id
      })
    }
    static all(){
      return store.users
    }
    findOrCreateBy(username){

    }
  }
}

let User = createUser()

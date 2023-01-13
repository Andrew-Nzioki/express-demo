console.log('Before')
getUser(1,getRepositories)
console.log('after')

function getRepositories(user){
    getRepositories(user.gitHubUsername,getCommits)
}
function getCommits(){
    getCommits(repos,displayCommits)
}
function displayCommits(commits){
console.log(commits)
}


function getUser(id){
    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log('Reading a user from database')
        resolve({id:id,gitHubUsername:'Andrew-Nzioki'})
    },2000);
})
}

// getUser(1)
//   .then(user=>getRepositories(user.gitHubUsername))
//   .then(repos=>getCommits([repos[0]]))
//   .then(commits=>console.log('Commits',commits))
//   .catch(err=>console.log('Err',err.message))

  //Async and Await
async function displayCommits(){
    const user=await getUser(1);
    const repos=await getRepositories(user.gitHubUsername)
    const commits=await getCommits(repos[0])
    console.log(commits);
}
displayCommits()

function getRepositories(username){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
console.log('calling github api')
resolve(['repo 1','repo 2'])},2000);
});
}
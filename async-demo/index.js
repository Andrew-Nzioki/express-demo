console.log('Before')
getUser(1,getRepositories)
console.log('after')

function getRepositories(user){
    getRepositories(user.gitHubUsername,getCommits)
}
function getCommits(){
    getCommits(repo,displayCommits)
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

function getRepositories(username){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
console.log('calling github api')
resolve(['repo 1','repo 2'])},2000);
});
}
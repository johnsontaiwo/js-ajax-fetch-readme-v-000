const app = "I don't do much.";

const token = 'b4b801d35e269ccb0315af28b1ed215febf03ada'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
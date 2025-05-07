let username;

document.getElementById("submit").onclick = function(){
  username = document.getElementById("demo2").value;
  document.getElementById("demo3").textContent = `Hello ${username}, What are you up to?`
}


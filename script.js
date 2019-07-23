let characters = ["smart", "intelligent", "sharp", "dumb", "wise", "brainy", "clever", "genius", "birillient"];
function myfunction() {
    let name = document.querySelector("input").value;
    let intelligence = Math.floor(Math.random() * characters.length);
    console.log("Dear " + name + " you are " + characters[intelligence] + " ;)")
}

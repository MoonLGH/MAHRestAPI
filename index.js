const failed = {"error":200,"message":`Invalid Path, Look At Docs At ${location.origin}/docs`}
document.getElementById("api").innerText = JSON.stringify(failed,null,3)
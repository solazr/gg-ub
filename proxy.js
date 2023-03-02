let urlQueue=[],
backButton=document.createElement("button");
backButton.style.width="25px",backButton.innerHTML="<";
let urlBox=document.createElement("input");
urlBox.type="text",urlBox.style.width="300px";
let Button1=document.createElement("button");
Button1.innerHTML="<-- iFrame the URL";
let Button2=document.createElement("button");
Button2.innerHTML="proxysite";
let Button3=document.createElement("button");
Button3.innerHTML="Snokido";
let Button4=document.createElement("button");
Button4.innerHTML="KBH Games";
let Button5=document.createElement("button");
Button5.innerHTML="Real Clever";
let iframe=document.createElement("iframe");
iframe.src="https://www.bing.com",iframe.width=window.innerWidth,iframe.height=window.innerHeight,
Button1.addEventListener("click",(()=>{0!=urlBox.value.length&&urlBox.value.startsWith("http")&&(iframe.src=urlBox.value.toLowerCase(),urlQueue.push(urlBox.value.toLowerCase()))})),
Button2.addEventListener("click",(()=>{iframe.src="https://www.proxysite.com",urlQueue.push("https://www.proxysite.com")})),urlQueue.push("http://waylon.carlsprojects.com"),
Button3.addEventListener("click",(()=>{iframe.src="https://www.snokido.com",urlQueue.push("https://www.snokido.com")})),
Button4.addEventListener("click",(()=>{iframe.src="https://kbhgames.com",urlQueue.push("https://kbhgames.com")})),
Button5.addEventListener("click",(()=>{document.location.href="https://clever.com"})),
backButton.addEventListener("click",(()=>{urlQueue.length>1&&(urlQueue.pop(),iframe.src=urlQueue.at(-1))})),
document.body.appendChild(backButton),
document.body.appendChild(urlBox),
document.body.appendChild(Button1),
document.body.appendChild(Button2),
document.body.appendChild(Button3),
document.body.appendChild(Button4),
document.body.appendChild(Button5),
document.body.appendChild(iframe);
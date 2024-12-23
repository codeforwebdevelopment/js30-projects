let link = document.getElementById('linkId');
let down = document.getElementById('linkStatus');
function disableLink() {
link.setAttribute('class', 'disabled');
link.setAttribute('style', 'color: black;');
down.innerHTML = 'Link disabled';
}


function disableLink(linkID, objButton) {
    const el = document.getElementById(linkID);
    if (!el.onclick) {
    el.onclick = function() {
    return false;
    };
    objButton.value = "Enable";
    } else {
    el.onclick = function() {
    return true;
    };
    objButton.value = "Disable";
    }
    }

    
function disablelink(linkID)
{
var hlink = document.getElementById(linkID);
if(!hlink)
return;
hlink.href = "#";
hlink.className = "disabledLink";
}

const share = document.getElementById('share')
const open = document.getElementById('open')
const close = document.getElementById('close')

function showShare() {
    share.style.display = 'flex';
    open.style.display = 'none';
    close.style.display = 'block';
}

function hideShare() {
    share.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
}
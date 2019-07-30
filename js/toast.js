function addItemToCart() {
    let items_num = document.getElementById('items-num');
    items_num.innerHTML += 1;
    _M.toast(
      'Connection timed out <a class="btn-flat waves-effect" onclick="toast()">Refresh</a>'
    );
}

function toast() {
    Materialize.toast('Message recieved', 5000);
}
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}




// ---------------------------------------Search Bar--------------------------
const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase()
    const storeitem = document.getElementById("book-container")
    const book = document.querySelectorAll(".book")
    const bname = storeitem.getElementsByTagName("h5")

    for(var i=0; i < bname.length; i++){
        let match = book[i].getElementsByTagName('h5')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                book[i].style.display = "";
            }
            else{
                book[i].style.display = "none";
            }
        }
    }
}
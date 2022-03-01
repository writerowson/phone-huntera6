const searchbtn = () => {
    const inputSearching = document.getElementById("inputSearch")
    const inputText = inputSearching.value
    inputSearching.value = ''
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data))

}

// searchbtn()

const displayPhones = (phoneList) => {
    const phones = document.getElementById("display-Phone");
    const first20Data = phoneList.slice(0, 20)
    // clear data
    phones.textContent = ''
    first20Data.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('mb-5')
        // div.className = "mb-5"
        div.innerHTML = `
        
        <div  class="card p-3 " style="width: 18rem ;">
            <img  src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 style="color: indigo;" class="card-title">${phone.phone_name}</h2>
                <h5 class="card-title"> Brand : ${phone.brand}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" onclick="" style="background-color: indigo;" class="btn btn-outline-light border border-rounded fw-bold">Details</a>
            </div>
        </div>
    
        `;
        phones.appendChild(div)
        // console.log(phone.phoneDetails)
    });
}

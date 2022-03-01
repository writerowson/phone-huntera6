const searchbtn = () => {
    const inputSearching = document.getElementById("inputSearch")
    const inputText = inputSearching.value
    // inputSearching.value = ''
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data))

}

searchbtn()

const displayPhones = (phoneList) => {
    const phones = document.getElementById("display-Phone");
    const first20Data = phoneList.slice(0, 20)
    // clear data
    phones.textContent = ''
    first20Data.forEach(phone => {
        console.log(phone)
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
                
                <a href="#" onclick="pressPhoneDetails('${phone.slug}')" style="background-color: indigo;" class="btn btn-outline-light border border-rounded fw-bold">Details</a>
            </div>
        </div>
        `;
        phones.appendChild(div)
        // console.log(phone.phoneDetails)
    });
}
const pressPhoneDetails = Id => {
    const url = `https://openapi.programming-hero.com/api/phone/${Id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
    console.log(url)
}
const displayPhoneDetails = details => {
    const phoneDetails = document.getElementById("phone-details")
    const div = document.createElement('div')
    div.classList.add('card')
    // phoneDetails.textContent = ''
    div.innerHTML = `
    <div class=" card p-3  ">
                <img src="${details.image}" style="width: 12rem" class="card-img-top justify-content-center " alt="...">
   
                <h2 style=" color: indigo;" class="card-title">${details.name}</h2>
                <h6 class="card-title">MainFeatures:</h6>
                <p>ChipSet: ${details.mainFeatures.chipSet}</p>
                <p>DisplaySize: ${details.mainFeatures.displaySize}</p>
                <p>Memory: ${details.mainFeatures.memory}</p>
                <h6 class="card-title">Sensors:</h6>
                
    </div>
   
    `
    phoneDetails.appendChild(div)
}


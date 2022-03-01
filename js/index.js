document.getElementById('error-message').style.display = 'none'

const searchbtn = () => {
    const inputSearching = document.getElementById("inputSearch")
    const inputText = inputSearching.value
    // inputSearching.value = ''
    document.getElementById('error-message').style.display = 'none'
    if (inputText == '') {
        return alert('please put a item name')
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhones(data.data))
            .catch(error => displayerror(error))
    }
}

const displayerror = error => {
    document.getElementById('error-message').style.display = 'block'
}


const displayPhones = (phoneList) => {
    const phones = document.getElementById("display-Phone");
    const first20Data = phoneList.slice(0, 20)
    // clear data
    phones.textContent = '';
    first20Data.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('mb-5')
        // div.className = "mb-5"
        div.innerHTML = `

        <div  class="card p-3 " style="width: 4rem, background-color: rgb(248, 242, 252);">
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
    // phoneDetails.textContent = '';
    phoneDetails.innerHTML = ""
    div.innerHTML = `
    <div style="background-color: rgb(248, 242, 252) ;" class=" card p-3 align-items-center ">
                <img src="${details.image}" style="width: 12rem" class="card-img-top justify-content-center mb-3 " alt="...">
                <h2 style=" color: indigo;" class="card-title">${details.name}</h2>

                <h5 class="card-title">ReleaseDate : ${details.releaseDate}</h5>
                <h5 class="card-title">MainFeatures:</h5>
                <p>ChipSet:  ${details.mainFeatures.chipSet}</p>
                <p>DisplaySize: ${details.mainFeatures.displaySize}</p>
                <p>Memory: ${details.mainFeatures.memory}</p>
                <h5 class="card-title">Sensors:</h5>
                <p>Sensors: ${details.mainFeatures.sensors}</p>
                <h5 class="card-title">Other:</h5>
                <p>NFC: ${details.others.NFC}</p>
                <p>Radio: ${details.others.Radio}</p>
                <p>Bluetooth: ${details.others.Bluetooth}</p>
                <p>USB: ${details.others.USB}</p>
                <p>GPS: ${details.others.GPS}</p>
                <p>WLAN: ${details.others.WLAN}</p>
                
                
    </div>
   
    `
    phoneDetails.appendChild(div)
}


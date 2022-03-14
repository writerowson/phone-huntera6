const searchbtn = () => {
    const inputSearching = document.getElementById("inputSearch")
    const phoneDetails = document.getElementById("phone-details")
    phoneDetails.innerHTML = ''
    const inputText = inputSearching.value
    inputSearching.value = ''
    if (inputText == "") {
        return alert('please put a item name');

    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhones(data.data))
    }
}

const displayPhones = (phoneList) => {
    const phones = document.getElementById("display-Phone");
    // clear data
    phones.innerHTML = '';
    const first20Data = phoneList.slice(0, 20)
    if (first20Data <= 0) {
        return alert('Sorry, no result')

    }
    first20Data.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('mb-5')
        // div.className = "mb-5"
        div.innerHTML = `
        
        <div   class= "container card p-3 " style="width: 4rem, background-color: rgb(248, 242, 252);">
            <img  src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 style="color: indigo;" class="card-title">${phone.phone_name}</h2>
                <h5 class="card-title"> Brand : ${phone.brand}</h5>
                
                <a href="#" onclick="pressPhoneDetails('${phone.slug}')" style="background-color: indigo;" class="btn btn-outline-light border border-rounded fw-bold">Details</a>
             
            </div>
       </div>
                `;
        document.querySelector("#full-phonelist").innerHTML = "Load More>>"
        phones.appendChild(div)

    });
}
const pressPhoneDetails = Id => {
    const phoneDetails = document.getElementById("phone-details")
    phoneDetails.innerHTML = ''
    const url = `https://openapi.programming-hero.com/api/phone/${Id}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))

}
const displayPhoneDetails = details => {
    const phoneDetails = document.getElementById("phone-details")
    console.log(details)
    const div = document.createElement('div')
    div.classList.add('card')
    // clear Data

    div.innerHTML = `
    <div style="background-color: rgb(248, 242, 252) ;" class=" card p-3 align-items-center ">
                <img src="${details.image}" style="width: 12rem" class="card-img-top justify-content-center mb-3 " alt="...">
                <h2 style=" color: indigo;" class="card-title">${details.name}</h2>

                <h5 class="card-title">ReleaseDate : ${details.releaseDate ? details.releaseDate : 'No Release Date Found'} </h5>
                <h5 class="card-title">MainFeatures:</h5>
                <p><b>ChipSet:</b> ${details.mainFeatures.chipSet} </p>
                <p><b>DisplaySize:</b> ${details.mainFeatures.displaySize}</p>
                <p><b>Memory:</b> ${details.mainFeatures.memory}</p>
                <h5 class="card-title">Sensors:</h5>
                <p><b>Sensors: </b>${details.mainFeatures.sensors}</p>
                <h5 class="card-title">Other:</h5>
                <p><b> NFC:</b> ${(details.others == undefined) ? 'no info' : details.others.NFC}</p>
                <p><b> Radio:</b> ${(details.others == undefined) ? 'no info' : details.others.Radio}</p>
                <p><b> USB:</b> ${(details.others == undefined) ? 'no info' : details.others.USB}</p >
            <p><b> Bluetooth:</b> ${(details.others == undefined) ? 'no info' : details.others.Bluetooth}</p>
                <p><b> GPS:</b> ${(details.others == undefined) ? 'no info' : details.others.GPS}</p>
                <p><b> WLAN:</b> ${(details.others == undefined) ? 'no info' : details.others.WLAN}</p>
       
            
                      
    </div >
    `
    phoneDetails.appendChild(div)
}

const fullPhonelist = () => {
    const allphones = document.getElementById("full-phonelist");
    allphones.innerHTML = ''
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllPhones(data.data))
    console.log(url)
}

const displayAllPhones = allPhoneList => {
    const showAllPhones = document.getElementById("display-allPhone");
    // clear data
    showAllPhones.innerHTML = '';
    allPhoneList.forEach(phones => {
        const div = document.createElement("div");
        div.classList.add('col-lg-4')
        div.classList.add('mb-5')
        div.innerHTML = `
        
        <div   class="card p-3 " style="width: 4rem, background-color: rgb(248, 242, 252);">
            <img  src="${phones.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 style="color: indigo;" class="card-title">${phones.phone_name}</h2>
                <h5 class="card-title"> Brand : ${phones.brand}</h5>
                
                <a href="#" onclick="pressPhoneDetails('${phones.slug}')" style="background-color: indigo;" class="btn btn-outline-light border border-rounded fw-bold">Details</a>
             
            </div>
           
        </div>
        
        `;
        showAllPhones.appendChild(div)
    })

}
const loadData = async (searchtext, searchThings) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext}`);
    const data = await res.json();
    // console.log(data);
    const phones = data.data
    dataloading(phones)
}

const dataloading = phones => {
    const phoneContainer = document.getElementById('card-cont')
    phoneContainer.textContent = ''
    phones.forEach(phone => {
        console.log(phone);
        const divSection = document.createElement('divSection')
        divSection.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="${phone.image}"
                            alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>${phone.slug}</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
        `
        phoneContainer.appendChild(divSection)
    });
}

const handleBtn = () => {
    const searchfield = document.getElementById('input-field');
    const searchtext = searchfield.value;
    // console.log(searchtext);
    loadData(searchtext)
}

const handleSearch = () => {
    const searchSection = document.getElementById('search-section');
    const searchThings = searchSection.value;
    loadData(searchThings)
}





let a = 5;

function SumOfNum (num1,num2) {
    const results = num1+ num2 + a;
    return results;
}
const sum = SumOfNum(4,5);
console.log(sum);
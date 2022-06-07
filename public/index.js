const inputName = document.querySelector('#productName');
const inputPrice = document.querySelector("#productPrice");
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', (e)=>{
    
    const name = inputName.value;
    const price = inputPrice.value;

    fetch('/api/v1/products', {
        method: 'POST',
         headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            price,
        }),
    })
})
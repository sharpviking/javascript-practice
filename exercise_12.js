const address = {
    street: 'kartavaya path',
    city: "sumeru parvat",
    zipCode: 1000001,

};

function showAddress(address) {
    for (key in address)
        console.log(key, address[key]);

}

showAddress(address);
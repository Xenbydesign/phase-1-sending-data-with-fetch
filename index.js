// Add your code here

// const dogData= {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };


// const configurationObject = {
//     method:'POST',
//     headers:{
//         'Content-Type': 'application/json',
//         'Accept':'application/json'
//     },
//     body:JSON.stringify(dogData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function(object){
//         console.log(object);
//     });


const userData = {
        'name': 'Steve',
        'email': 'steve@steve.com',
    };

const config= {
    method:'POST',
    headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
    },
    body: JSON.stringify(userData),
};

function submitData() {
    return fetch('http://localhost:3000/users',config)
    .then (function (response){
        return response.json();
    })
    .then(function (object) {
        const newId = object.id
        const idElement = document.createElement('p');
        idElement.textContent = newId;
        document.body.appendChild(idElement);
        console.log(object);
    })
    .catch(function (error){
        const errorElement = document.createElement('p');
        errorElement.textContent = 'Unauthorized Access';
        document.body.appendChild(errorElement);
        console.log(error.message);
      })
};
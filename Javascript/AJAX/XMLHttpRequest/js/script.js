window.addEventListener("DOMContentLoaded", () => {

    const showPeopleBtn = document.querySelector('.clickMe');
    const form = document.querySelector('form');
    
    function showPeopleCard() {

        const request = new XMLHttpRequest();
        request.open("GET", "http://localhost:3000/people");
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");
        request.send();

        request.addEventListener("load", function() {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                
                data.forEach(item => {
                    let card = document.createElement('div');

                    card.classList.add('card');
                        
                    let icon;
                    if (item.sex == "male") {
                        icon = "icons/mars.png";
                    } else {
                        icon = "icons/female.png"
                    }

                    card.innerHTML = `
                        <img src="${item.photo}" alt="photo">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex">
                            <img src= ${icon} alt="sex">
                        </div>
                        <div class="age">${item.age}</div>
                    `;
                    document.querySelector('.app').appendChild(card);
                });


            } else {
                console.error("Что-то пошло не так");
            }
            
        });
        this.remove();
    }
    showPeopleBtn.addEventListener('click', showPeopleCard, {"once":true});


    function createNewPeople(event) {
        event.preventDefault();
        
        let formData = new FormData(form);
        formData.append("id", Math.random());
        
        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        const request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/people");
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");
        request.send(json);
        
        document.getElementById("myForm").reset(); 
    }
     
    form.addEventListener('submit', (event) => createNewPeople(event), {"once": true});

    
});
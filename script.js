function renderArray() {
    let tpArray = JSON.parse(localStorage.getItem('tpArray')) || [];
    let resultsDiv = document.getElementById('results-div');
    resultsDiv.innerHTML = '';
    tpArray.forEach((entry) => {
        let result = document.createElement('p');
        result.textContent = `${entry.isValid ? 'Valid US Number' : 'Invalid US Number'} : ${entry.phoneNumber} `;
        resultsDiv.appendChild(result);
    });
}

window.onload = function () {
    renderArray();
};

function tpValidation() {
    let tpArray = JSON.parse(localStorage.getItem('tpArray')) || [];
    let phoneNumber = document.getElementById("user-input").value;
    let phonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})[- .]?\d{3}[- .]?\d{4}$/;

    if (phonePattern.test(phoneNumber)) {
        tpArray.push({phoneNumber: phoneNumber, isValid: true});

    } else {
        tpArray.push({phoneNumber: phoneNumber, isValid: false});
    }

    document.getElementById('user-input').value = '';
    let resultsDiv = document.getElementById('results-div');
    resultsDiv.innerHTML = '';

    tpArray.forEach((entry) => {
        let result = document.createElement('p');
        result.textContent = `${entry.isValid ? 'Valid US Number' : 'Invalid US Number'} : ${entry.phoneNumber} `;
        resultsDiv.appendChild(result);
    });

    localStorage.setItem('tpArray', JSON.stringify(tpArray));
}

function clearResult() {
    document.getElementById('results-div').innerHTML = '';
    localStorage.removeItem('tpArray');
}

let checkButtonEvent = document.getElementById('check-btn');
let userInput = document.getElementById('user-input');
checkButtonEvent.addEventListener('click', (e) => {
    if (userInput.value === '') {
        alert("Please provide a phone number");
    } else {
        tpValidation();
    }
});

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (userInput.value === '') {
            alert("Please provide a phone number");
        } else {
            tpValidation();
        }
    }
});

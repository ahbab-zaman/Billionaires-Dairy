const getBillionaires = () => {
  fetch("https://forbes400.onrender.com/api/forbes400/?limit=20")
    .then((response) => response.json())
    .then((data) => showAllBillionaires(data));
};

const showAllBillionaires = (items) => {
    console.log(items)
    for(let item of items){
        const tableBody = document.getElementById("table-body");
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.personName}</td>
                        <td>${item.countryOfCitizenship}</td>
                        <td>${item.industries}</td> 
                        <td>${item.rank}</td>
                        <td>${item.finalWorth}</td>`;
                      tableBody.appendChild(tr)
                    }
 
};
getBillionaires();

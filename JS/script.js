const getBillionaires = () => {
  fetch("https://forbes400.onrender.com/api/forbes400/?limit=20")
    .then((response) => response.json())
    .then(data => showAllBillionaires(data));
};

const showAllBillionaires = (items) => {
  const tableBody = document.getElementById('table-body');
  for(let item of items){
    const randomIndex = Math.floor(Math.random() * items.length)
    const randomData = item[randomIndex];
    const tr = document.getElementById('tr');
    tr.innerHTML = `
                <td>${randomData.personName}</td>
    `

    tableBody.appendChild(tr);
  }
}


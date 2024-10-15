// fetch billionaires data
const getBillionaires = () => {
  fetch("https://forbes400.onrender.com/api/forbes400/?limit=30")
    .then((response) => response.json())
    .then((data) => showBillionaires(data.slice(0, 6)));
};

// Show billionaires list
const showBillionaires = (data) => {
  let tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td class="text-lg font-semibold text-gray-500">${
                      item.personName
                    } <i onclick = "showBio('${
      item.naturalId
    }')" class="fa-regular fa-eye text-black cursor-pointer"></i>
                  </td>
                   
                    <td class="font-semibold text-slate-900">${
                      item.countryOfCitizenship
                    }</td>
                    <td class="font-semibold text-slate-900">${
                      item.industries
                    }</td>
                    <td class="font-semibold text-slate-900 text-center">${
                      item.rank
                    }</td>
                    <td class="font-semibold text-slate-900 text-center">${(
                      item.finalWorth / 1000000
                    ).toFixed(3)} M</td>
                    `;

    tableBody.append(row);
  });
};
getBillionaires();

const showBio = (id) => {
    const bioModal = document.getElementById("bio-modal");
    bioModal.innerHTML = `
          <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold">${id.personName}</h3>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
`;
    document.getElementById("my_modal_1").showModal();
  };

// Show all data
const loadAllData = async () => {
  const response = await fetch(
    "https://forbes400.onrender.com/api/forbes400/?limit=30"
  );
  const data = await response.json();
  showBillionaires(data);
};

// Loading spinner

const showAllData = () => {
  document.getElementById("spinner-container").style.display = "flex";
  document.getElementById("table-container").style.display = "none";
  setTimeout(() => {
    document.getElementById("spinner-container").style.display = "none";
    loadAllData();
    document.getElementById("table-container").style.display = "block";
  }, 2000);
};

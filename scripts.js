const roomDetails =
{
    Br: "Bedroom (Br)",
    Li: "living (Li)",
    Ki: "Kitchen (Ki)",
    Ba: "Bathroom (Ba)",
    EH: "Entrance Hall (EH)"
}



const checkedlist = []

function checkedListener($event) {
    console.log($event);
}



for (each in roomDetails) {
    let opt = `<option  value="${each}">${roomDetails[each]}</option>`
    $('#selectRoom').append(opt);
}


let addCounter = 0;


function deleteRoom(each) {

    $(each).remove();


}

function addRoom(each) {

    addCounter++;
    const x = `${each}-dim-len_${addCounter}`;
    const y = `${each}-dim-wid_${addCounter}`;


    if (!roomDetails[each]) {
        alert("this feild already exists");

        return false;
    }
    let container = `<div id="${each}_id_${addCounter}" onclick="checkedListener(${each}_id_${addCounter})">

            
              <input type="checkbox" id="${each}_check_${addCounter}" name="" value=""
/> ${roomDetails[each]} Length(ft):
              <input
                class="my-w-50 mr-2"
                type="number"
                id="${x}"
                name="length"
              />

              Width(ft):
              <input
                class="my-w-50 mr-2"
                type="number"
                id="${y}"
                name="length"
              />

            <button class=" btn bg-white" onclick="deleteRoom(${each}_id_${addCounter})">
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                    <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                    />
                    <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                </svg>
            </button>


            </div>`;
    if (each == "") { alert("text") }
    else {
        $("#appendRoom").append(container);

    }
    return true;
}


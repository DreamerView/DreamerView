function getSelectedValueFromCorTime(selectElement) {
    const selectedValue = selectElement;
    const date = new Date();
    const getDate = date.getFullYear() + "-" + 
                String(date.getMonth() + 1).padStart(2, '0') + "-" + 
                String(date.getDate()).padStart(2, '0') + "T" + 
                String(date.getHours()).padStart(2, '0') + ":" + 
                String(date.getMinutes()).padStart(2, '0');

    // Если нужно добавить секунды:
    const getDateWithSeconds = getDate + ":" + 
                                String(date.getSeconds()).padStart(2, '0');
    const idValue = selectedValue.id.split('_')[1];
    // console.log(resultValue);
    document.querySelector("td#time_"+idValue).innerHTML = `
        <input onchange="getSelectedValueFromCorType(this)" name="time[]" type="time" class="form-control bg-body-secondary border border-dark-subtle" id="" required>
    `;
    document.querySelector("td#type_"+idValue).innerHTML = `
        <select name="type[]" class="form-select bg-body-secondary border border-dark-subtle" required>
            <option value="all">Общее</option>
            <option value="even">Числитель</option>
            <option value="not_even">Знаменатель</option>
        </select>
    `;
    document.querySelector("td#status_"+idValue).innerHTML = `
        <select name="status[]" id="op_${idValue}" onchange="changeOpacity(this)" title="Замена вставляется как временная дисциплина!!!" class="form-select bg-body-secondary border border-dark-subtle" required>
            <option value="show">Показывать</option>
            <option value="hide">Скрыть</option>
            <option value="replace">Замена</option>
        </select>
    `;
    document.querySelector("td#finish_"+idValue).innerHTML = `
        <input name="finish[]" type="datetime-local" class="form-control bg-body-secondary border border-dark-subtle" value="${getDateWithSeconds}" id="" required>
    `;

}

function changeOpacity(opacity) {
    const selectedValue = opacity;
    const idValue = selectedValue.id.split('_')[1];
    const result = opacity.value;
    document.getElementById("col_"+idValue).style.opacity = result==="hide"?0.5:1;
}

function renderRoom(room) {
    const resultValue = room.value;
    document.querySelector("div#renderTableRoom").innerHTML = `
        ${result['corpus_list'].filter(corList=>corList['corpus_uuid']===resultValue).map(corList =>
            `<div class="col-12">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${corList['name']}</h5>
                        <h5 class="fs-6 mb-4 text-body-secondary">Количество доступных мест: <b>${corList['room']}</b></h5>
                        ${corList['inventory']!==null?
                        `<ul class="list-group">
                            <li class="list-group-item fw-bold">В кабинете доступно: </li>
                            ${result['inventory'].map(inv=>
                                corList['inventory'].includes(inv['uuid'])?
                                `<li class="list-group-item">${inv['name']}</li>`:
                                ""
                            ).join('')}
                        </ul>`:``}
                    </div>
                </div>
            </div>`
        ).join('')}
    `;
}

function getSelectedValueFromCorList(selectElement) {
    // Получаем выбранное значение
    const selectedValue = selectElement;
    const idValue = selectedValue.id.split('_')[1];
    const resultValue = selectedValue.value;
    // console.log(resultValue);
    document.querySelector("td#corpus_list_"+idValue).innerHTML = `
        <select onchange="getSelectedValueFromCorTime(this)" id="corList_${idValue}" name="corpus_list[]" class="form-select bg-body-secondary border border-dark-subtle" aria-label="Default select example" required>
            <option selected disabled value="">Open this select menu</option>
            ${result['corpus_list'].filter(corList=>corList['corpus_uuid']===resultValue).map(corList =>
                `<option value="${corList['uuid']}">${corList['name']}</option>`
            ).join('')}
        </select>
    `;
    document.querySelector("td#time_"+idValue).innerHTML = "";
    document.querySelector("td#type_"+idValue).innerHTML = "";
}

function getSelectedValueFromCor(selectElement) {
    // Получаем выбранное значение
    const selectedValue = selectElement;
    const idValue = selectedValue.id.split('_')[1];
    // console.log(selectedValue);
    document.querySelector("td#corpus_"+idValue).innerHTML = `
        <select id="cor_${idValue}" onchange="getSelectedValueFromCorList(this)" name="corpus[]" class="form-select bg-body-secondary border border-dark-subtle" aria-label="Default select example" required>
            <option selected disabled value="">Open this select menu</option>
            ${result['corpus'].map(cor =>
                `<option value="${cor['uuid']}">${cor['name']}</option>`
            ).join('')}
        </select>
    `;
    document.querySelector("td#corpus_list_"+idValue).innerHTML = "";
    document.querySelector("td#time_"+idValue).innerHTML = "";
    document.querySelector("td#type_"+idValue).innerHTML = "";
}

function getSelectedValueFromDis(selectElement) {
    // Получаем выбранное значение
    const selectedValue = selectElement;
    const idValue = selectedValue.id.split('_')[1];
    const resultValue = selectedValue.value;
    const search = result['disciplines'].find(dis=>dis['uuid']===resultValue);
    // console.log(search);
    console.log(result['users']);
    document.querySelector("td#teacher_"+idValue).innerHTML = `
        <select id="tea_${idValue}" onchange="getSelectedValueFromCor(this)" name="teacher[]" class="form-select bg-body-secondary border border-dark-subtle" aria-label="Default select example" required>
            <option selected disabled value="">Open this select menu</option>
            ${result['users'].filter(tea=>tea['department'].some(dep => dep['department'] === search['department'])).map(tea =>
                `<option value="${tea['uuid']}">${tea['surname']} ${tea['name']}</option>`
            ).join('')}
        </select>
    `;
    document.querySelector("select#dis_"+idValue).value = resultValue;
    document.querySelector("div#department_"+idValue).innerHTML = `<input type="hidden" name="department[]" value="${search['department']}">`;
    document.querySelector("td#corpus_"+idValue).innerHTML = "";
    document.querySelector("td#corpus_list_"+idValue).innerHTML = "";
    document.querySelector("td#time_"+idValue).innerHTML = "";
    document.querySelector("td#type_"+idValue).innerHTML = "";
}

function generateUUID() {
    let d = new Date().getTime(); // Получаем текущее время в миллисекундах
    let d2 = (performance && performance.now && (performance.now() * 1000)) || 0; // Время с более высокой точностью, если доступно

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16; // Генерируем случайное число
        if (d > 0) { // Используем время для генерации первых частей UUID
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else { // Используем время с высокой точностью для остальных частей
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16); // Возвращаем символ в зависимости от текущего шаблона
    });
}

const addTable = (event) => {
    const uuid = generateUUID();
    document.querySelector("tbody#"+event).insertAdjacentHTML("beforeend", `
        <tr id="col_${uuid}">
            <td id="discipline_${uuid}">
                <select id="dis_${uuid}" name="discipline[]" onchange="getSelectedValueFromDis(this)" class="form-select bg-body-secondary border border-dark-subtle" aria-label="Default select example" required>
                    <option selected disabled value="">Open this select menu</option>
                    ${result['disciplines'].map(dis =>
                        `<option value="${dis['uuid']}">${dis['name']}</option>`
                    ).join('')}
                </select>
                <div id="department_${uuid}">
                
                </div>
            </td>
            <td id="teacher_${uuid}">
            
            </td>
            <td id="corpus_${uuid}">
                
            </td>
            <td id="corpus_list_${uuid}">
                
            </td>
            <td id="time_${uuid}">
    
            </td>
            <td id="type_${uuid}">
    
            </td>
            <td id="status_${uuid}">
    
            </td>
            <td id="finish_${uuid}">
    
            </td>
            <td>
                <button onclick="moveUp(this)" type="button" class="btn btn-outline-primary border-0"><i class="bi bi-arrow-up-circle-fill"></i></button>
                <button onclick="moveDown(this)" type="button" class="btn btn-outline-primary border-0"><i class="bi bi-arrow-down-circle-fill"></i></button>
                <button onclick="deleteCol('${uuid}')" type="button" class="btn btn-outline-danger border-0"><i class="bi bi-trash3-fill"></i></button>
            </td>
        </tr>
    `);
}

const deleteCol = (e) => {
    document.getElementById(`col_${e}`).innerHTML = "";
}
function moveUp(button) {
    // Получаем текущую строку (tr)
    const row = button.closest('tr');
    // Получаем tbody
    const tbody = row.parentNode;
    // Проверяем, не является ли эта строка первой
    if (row.previousElementSibling) {
        // Перемещаем строку выше
        tbody.insertBefore(row, row.previousElementSibling);
    }
}

function moveDown(button) {
    const row = button.closest('tr');
    const tbody = row.parentNode;
    // Проверяем, не является ли эта строка последней
    if (row.nextElementSibling) {
        tbody.insertBefore(row.nextElementSibling, row);
    }
}
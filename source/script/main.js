const formatPhone = (input) => {
  // Удаляем все символы, кроме цифр
  let value = input.value.replace(/\D/g, '');

  // Ограничиваем количество цифр 11 символами (1 + 10 для номера)
  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  // Если введено больше 1 цифры, форматируем номер
  if (value.length > 1) {
    value = value.replace(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/, function (match, g1, g2, g3, g4, g5) {
      let formatted = '+7';
      if (g2) formatted += ' (' + g2;
      if (g3) formatted += ') ' + g3;
      if (g4) formatted += '-' + g4;
      if (g5) formatted += '-' + g5;
      return formatted;
    });
  } else {
    value = '+7';
  }

  // Устанавливаем отформатированное значение обратно в input
  input.value = value;
}

document.querySelectorAll('table th').forEach(header => {
  header.addEventListener('click', () => {
    const table = header.closest('table'); // Находим таблицу, к которой принадлежит заголовок
    const tbody = table.querySelector('tbody');
    tbody.classList.add("fade-out");
    const index = Array.from(header.parentElement.children).indexOf(header); // Индекс столбца
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Определяем направление сортировки (по возрастанию/убыванию)
    const isAscending = header.classList.contains('asc');
    header.classList.toggle('asc', !isAscending);
    header.classList.toggle('desc', isAscending);

    // Сортируем строки таблицы
    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].innerText;
      const cellB = rowB.children[index].innerText;
      const compare = isNaN(cellA) || isNaN(cellB) // Проверяем, числа или строки
        ? cellA.localeCompare(cellB)
        : Number(cellA) - Number(cellB);

      return isAscending ? -compare : compare;
    });

    // Вставляем отсортированные строки обратно в таблицу
    setTimeout(() => {
      tbody.classList.remove("fade-out");
      tbody.append(...sortedRows);
      tbody.classList.add("fade-in");
    }, [5])
  });
});
let timerSearchTable = 0;
document.querySelectorAll('input[data-table-search]').forEach(input => {
  input.addEventListener('input', function() {
    clearTimeout(timerSearchTable);
    const tableSelector = input.getAttribute('data-table-search'); // Получаем селектор таблицы из атрибута
    const filter = input.value.toLowerCase();
    const table = document.querySelector(tableSelector);
    const tbody = document.querySelector(tableSelector + " > tbody");
    tbody.classList.add("fade-out");
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) { // Пропускаем заголовок (первая строка)
      const cells = rows[i].getElementsByTagName('td');
      let rowMatches = false;

      for (let j = 0; j < cells.length; j++) {
        const cellText = cells[j].textContent || cells[j].innerText;

        if (cellText.toLowerCase().indexOf(filter) > -1) {
          rowMatches = true;
          break;
        }
      }

      if (rowMatches) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
      timerSearchTable = setTimeout(()=>{
        tbody.classList.remove("fade-out");
        tbody.classList.add("fade-in");
      },[5])
    }
  });
});
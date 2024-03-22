function highlight(table) {
  const rows = table.querySelectorAll('tbody > tr');

  for (const row of rows) {
      const cells = row.cells;

      for (const cell of cells) {
          if (cell.dataset.available !== undefined) {
              row.classList.add(cell.dataset.available === 'true' ? 'available' : 'unavailable');
          }

          if (cell.textContent === 'm') {
              row.classList.add('male');
          } else if (cell.textContent === 'f') {
              row.classList.add('female');
          }

          if (cell.cellIndex === 1 && parseInt(cell.textContent) < 18) {
              row.style.textDecoration = 'line-through';
          }
      }

      if (!row.querySelector('[data-available]')) {
          row.hidden = true;
      }
  }
}
// 1. и 2.

const settings = {
    row_count: 9,
    col_count: 8,
    black_cells: '#000000',
    white_cells: '#eeeeee',
};

const start = {
    settings,
    container_el: null,

    init() {
        this.container_el = document.getElementById('board');
        this.init_cells();
    },
    init_cells() {
        this.container_el.innerHTML = '';
        let char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

        for (let row = 0; row < this.settings.row_count; row++) {
            const trElem = document.createElement('tr');
            if (row > 0) {
                trElem.innerText = `${row}`
            } else {
                trElem.innerText = '\n'
            }
            this.container_el.appendChild(trElem);

            for (let col = 0; col < this.settings.col_count; col++) {
                const cell = document.createElement('td');
                if (row === 0) {
                    cell.style.backgroundColor = 'none'
                    cell.style.border = 'none'
                    cell.innerText = char[col];
                    cell.style.textAlign = 'center'
                } else {
                    if (col % 2 === 0 && row % 2 === 0) {
                        cell.style.backgroundColor = this.settings.white_cells
                    } else if (col % 2 !== 0 && row % 2 !== 0) {
                        cell.style.backgroundColor = this.settings.white_cells
                    } else {
                        cell.style.backgroundColor = this.settings.black_cells
                    }
                }
                trElem.appendChild(cell);
            }

        }
    }
}

start.init();
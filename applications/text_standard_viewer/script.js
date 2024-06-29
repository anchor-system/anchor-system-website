document.addEventListener('DOMContentLoaded', () => {

    const textGrid = document.getElementById('textGrid');
    const songTitle = document.getElementById('songTitle');
    const changeTextInputBtn = document.getElementById('changeTextInputBtn');
    const modal = document.getElementById('modal');
    const textInputList = document.getElementById('textInputList');
    const standardCells = 4;
    let currentTextInput = "Cherokee";

    const sectionColors = {
        'A': 'section-a',
        'B': 'section-b'
    };

    const parseText = (text) => {
        let currentSection = '';
        let parsedData = [];
        let lines = text.trim().split('\n');

        for (let line of lines) {
            if (line.trim() === '') {
                parsedData.push({
                    cells: Array(standardCells).fill({ content: '', isDoubleBar: false }),
                    totalCells: standardCells,
                    section: currentSection,
                    isEmptyLine: true
                });
                continue;
            }

            let cells = line.split('|').map(cell => cell.trim()).filter(cell => cell.length > 0);
            const isDoubleBar = cells[cells.length - 1]?.endsWith('||');

            if (/^[A-Z]\s/.test(cells[0])) {
                currentSection = cells[0][0];
                cells[0] = cells[0].slice(2).trim();
            }

            parsedData.push({
                cells: cells.map(cell => ({
                    content: cell.replace('||', ''),
                    isDoubleBar: isDoubleBar
                })),
                totalCells: cells.length,
                section: currentSection,
                isEmptyLine: false
            });
        }

        return parsedData;
    };

    const renderTable = (data) => {
        textGrid.innerHTML = ''; // Clear existing table

        for (let rowData of data) {
            const row = document.createElement('tr');
            if (!rowData.isEmptyLine && sectionColors[rowData.section]) {
                row.classList.add(sectionColors[rowData.section]);
            }

            const emptyCellsNeeded = standardCells - rowData.totalCells;
            for (let i = 0; i < emptyCellsNeeded; i++) {
                const emptyCell = document.createElement('td');
                emptyCell.innerHTML = '';
                if (rowData.isEmptyLine) {
                    emptyCell.classList.add('no-border');
                }
                row.appendChild(emptyCell);
            }

            for (let cellData of rowData.cells) {
                const cell = document.createElement('td');
                cell.innerHTML = cellData.content;
                if (cellData.isDoubleBar) {
                    cell.classList.add('double-bar');
                }
                if (rowData.isEmptyLine) {
                    cell.classList.add('no-border');
                }
                row.appendChild(cell);
            }

            textGrid.appendChild(row);
        }
    };

    const openModal = () => {
        modal.style.display = 'block';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    changeTextInputBtn.addEventListener('click', openModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    const updateTextInput = (label) => {
        currentTextInput = label;
        songTitle.textContent = label;
        const parsedText = parseText(text_standards[label]);
        renderTable(parsedText);
        closeModal();
    };

    const populateTextInputList = () => {
        textInputList.innerHTML = '';
        Object.keys(text_standards).forEach(label => {
            const listItem = document.createElement('li');
            listItem.textContent = label;
            listItem.addEventListener('click', () => {
                updateTextInput(label);
            });
            textInputList.appendChild(listItem);
        });
    };

    populateTextInputList();
});

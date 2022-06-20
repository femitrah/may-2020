const stock = {
	pencil: {
		name: 'natraj',
        type: ['HB', '2H', 'H'],
        rate: [3, 5, 5],
        available_stock: 250
    },
    note_book: {
        name: 'class mate',
        type: ['long size', 'king size'],
        rate: [35, 20],
        available_stock: 500
    }
};

const {pencil:{rate:rateUp}}=stock;
const rateGo=rateUp;
const rateSet=[6, 10];

const{note_book:{type:typeUp}}=stock;
const typeGo=typeUp;
const typeSet=['small size', 'ruled', 'un ruled'];

const stock1 = {
	pencil: {
		name: 'natraj',
        type: ['HB', '2H', 'H'],
        rate: [...rateGo,...rateSet],
        available_stock: 250
    },
    note_book: {
        name: 'class mate',
        type: [...typeGo,...typeSet],
        rate: [35, 20],
        available_stock: 500
    }
};

console.log("line42",stock1)
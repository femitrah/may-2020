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
const objectOne={
rate:[6, 10]
}

const objectTwo={
    rate:  ['small size', 'ruled', 'un ruled']
    }


const {pencil,note_book}=stock;               console.log("pencil",pencil,note_book);
const {rate}=pencil;                          console.log("rate",rate)  ;  
const {rate:rateOne}=objectOne;               console.log("rate",rateOne)  ;
const rateAssign=[...rate,...rateOne];        console.log("rateAssign",rateAssign)
const {type}=note_book;                       console.log("bookRate",type);
const {rate:outRate}=objectTwo;               console.log("outrate",outRate);
const rateAssignOne=[...type,...outRate];     console.log("rateAssignOne",rateAssignOne);



const stockOne = {
	pencil: {
		name: 'natraj',
        type: ['HB', '2H', 'H'],
        rate: rateAssign,
        available_stock: 250
    },
    note_book: {
        name: 'class mate',
        type: rateAssignOne,
        rate: [35, 20],
        available_stock: 500
    }
};
console.log("stockOne",stockOne);

const stock = {
	pencil: {
		name: 'natraj',
    type: ['HB', '2H', 'H'],
    rate: [3, 5, 5],
    available_stock: 250,
    
    },
  note_book: {
    name: 'class mate',
    type: ['long size', 'king size'],
    rate: [35, 20],
    available_stock: 500
    }
}

let{pencil:{rate:rate1}}=stock
var new_rate=rate1
const rate3=[6,10]
let{note_book:{type:type1}}=stock
var new_type=type1
const type3= ['small size', 'ruled', 'un ruled']


const stock1 = {
	pencil: {
		name: 'natraj',
    type: ['HB', '2H', 'H'],
    rate: [...new_rate,...rate3],
    available_stock: 250,
    },
  note_book: {
    name: 'class mate',
    type: [...new_type,...type3],
    rate: [35, 20],
    available_stock: 500
    }
}
 console.log(stock1)


    
    
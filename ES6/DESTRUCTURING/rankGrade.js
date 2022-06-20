const get=  {
    data:   [
                {
                    name: 'Ajay',
                    personal:   {
                                    age: '25',
                                    native: 'nellai',
                                    education: {
                                                    rank: '2',
                                                    grade: 'B'
                                                },
                                    interest:   {
                                                    hobby: 'book reading'
                                                }
                                }
                },
                {
                    name: 'vicky',
                    personal:   {
                                    age: '26',
                                    native: 'chennai',
                                    education: {
                                                    rank: '3',
                                                    grade: 'D'
                                                },
                                    interest:   {
                                                    hobby: 'playing'
                                                }
                                }
                },
                {
                    name: 'muthu',
                    personal:   {
                                    age: '35',
                                    native: 'madurai',
                                    education:  {
                                                    rank: '5',
                                                    grade: 'F'
                                                },
                                    interest:   {
                                                    hobby: 'writing'
                                                }
                                }
                }
            ]       
};                  

let {data}=get;
let [a,b,c]=data;

let{personal}=a;
let{personal:bChar}=b;
let{personal:cChar}=c;

let{education}=personal;
let{education:bText}=bChar;
let{education:cText}=cChar;


console.log("array","Ajay rank",education.rank,"grade",education.grade,"Vicky rank",bText.rank,"grade",bText.grade,"Muthu rank",cText.rank,"grade",cText.grade);

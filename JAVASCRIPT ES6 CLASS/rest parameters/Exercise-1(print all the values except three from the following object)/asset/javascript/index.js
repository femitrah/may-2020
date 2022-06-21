const object={  one: 1, 
                two: 2, 
                three: 3, 
                four: 4, 
                five: 5 
             }
restParameter(object);

function restParameter(objectValues){  

const {three,...remainingValues}=objectValues;

const{...rest}=remainingValues ;

console.log(`${rest.one} ${rest.two} ${rest.four};${rest.five}`);

};


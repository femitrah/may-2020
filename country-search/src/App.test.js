// import './'
// import SearchIcon from '@mui/icons-material/Search';

//  const App =() =>{
//   return (
//     <div className="search">
//       <div className="searchInputs">
//         <input type="text" placeholder="Enter the country name" />
        
//         <div className="searchIcon">
//           <SearchIcon/>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;

import data from './App'


function List() {
  //create a new array by filtering the original array
  const filteredData = data.filter((el) => {
      //if no input the return the original
      if (List.input === '') {
          return el;
      }
      //return the item which contains the user input
      else {
          return el.text.toLowerCase().includes(List.input)
      }
  })
}
// let filteredNative = con.filter((ab) => ab.code !== val.code);
//     setCon(filteredNative);
//   };
//   const onRemoveCountry = (val) => {
//     let fileterdCT = searchterm.filter((fd) => fd.code !== val.code);

//     const resultedArray = [...con, val];
//     console.log("ra", resultedArray);

//     setCountry(fileterdCT);
//     let a = resultedArray.sort((a, b) => (a.name > b.name ? 1 : -1));
    
//     setCon(a);
//   };

//   return (
//     <div>
//       <h1> Country Details</h1>
//       <div className="country-container">
//         <div className="countryScroll">
//           <input
//             type="text"
//             placeholder="Enter a country name..."
//             onChange={(event) => {
//               setSearch(event.target.value);
//             }}
//           />
//           {con
//             .filter((val) => {
//               if (search === "") {
//                 return val;
//               } else if (
//                 val.name.toLowerCase().includes(search.toLowerCase())
//               ) {
//                 return val;
//               }
//             })
//             .map((val, index) => {
//               return (
//                 <div className="user" onClick={() => addCountry(val, index)}>
//                   <p>{val.name}</p>
//                 </div>
//               );
//             })}
//         </div>

//         <div>
//           <h1 className="selectedCountries">Selected Countries</h1>
//           {searchterm.map((country, index) => (
//             <p key={index} onClick={() => onRemoveCountry(country)}>
//               {country.name}
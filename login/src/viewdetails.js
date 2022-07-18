import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export function GetDetails() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    const fetchPost = async () => {
      const response = await fetch(
        "https://api.scripture.api.bible/v1/bibles",
        {
          method: "GET",
          headers: { "api-key": "6d77d726b980143eff391187ac316c51" },
        }
      );
      const data1 = await response.json();
      console.log("data1", data1);
      setBook(data1.data);
    };
    fetchPost();
  }, []);

  let { userId } = useParams();
  console.log("ui", userId);
  console.log("getitem", book, "id", userId);
  let bookData = book.filter((d) => {
    if (userId === d.id) {
      console.log("output", d);
      return d;
    }
  });
  console.log("bd", bookData.length);
  return (bookData.length == 0 ? null : 

  <div className="tableData">
  <table>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
     { bookData.map((e,i) => {
        return (
          <tr>
            <td>{i + 1}</td>
            <td>{e.name}</td>
            <td>{e.description}</td>
          </tr>
        );
      })}
  </table>
</div>

)
}
function App1() {
  return <GetDetails />;
}
export default App1;

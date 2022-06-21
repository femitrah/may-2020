// 1. Display the Name (concat the userFirstName and userLastName), Email, Gender, Request status, Request source and Discrepancy in a table.
// (For display the Discrepancy use `requestDiscrepancy` value in the JSON and display the both educationInfo and personalInfo details with fieldName, old data, new data).

const JS  = [
    {
      "gender":"Male",
      "userEmail":"Doaulas@rrigg.com",
      "requestSource":"Student",
      "userFirstName":"Doaul",
      "requestStatus":"Pending",
      "userLastName":"Doaulas",
      "requestDiscrepancy":
            {
              "personalInfo":
                            [
                              {
                                "oldData":"Tester",
                                "newData":"Developer",
                                "isChanged":true,
                                "fieldName":"User Name"
                              },
                              {
                                "oldData":25,
                                "newData":25,
                                "isChanged":false,
                                "fieldName":"Age"
                              },
                              {
                                "oldData":"Female",
                                "newData":"Male",
                                "isChanged":true,
                                "fieldName":"Gender"}
                            ],
              "educationInfo":
                              [
                                {
                                  "oldData":"Test",
                                  "newData":"Test",
                                  "isChanged":false,
                                  "fieldName":"College"
                                },
                                {
                                  "oldData":80,
                                  "newData":80,
                                  "isChanged":false,
                                  "fieldName":"Marks"
                                },
                                {
                                  "oldData":"Arts",
                                  "newData":"Engineering",
                                  "isChanged":true,
                                  "fieldName":"Qualification"
                                }
                              ]
              }
    },
            
    {
      "gender":"Female",
      "userEmail":"robert@gmail.com",
      "requestSource":"Student",
      "userFirstName":"Robert",
      "requestStatus":"Approved",
      "userLastName":"JR",
      "requestDiscrepancy":
                            {
                              "personalInfo":
                                              [
                                                {
                                                  "oldData":"Actor",
                                                  "newData":"Director",
                                                  "isChanged":true,
                                                  "fieldName":"User Name"
                                                },
                                                {
                                                  "oldData":65,
                                                  "newData":58,
                                                  "isChanged":true,
                                                  "fieldName":"Age"
                                                },
                                                {
                                                  "oldData":"Male",
                                                  "newData":"Male",
                                                  "isChanged":false,
                                                  "fieldName":"Gender"
                                                }
                                              ],
                              "educationInfo":
                                              [
                                                {"oldData":"Test",
                                                  "newData":"Test",
                                                  "isChanged":false,
                                                  "fieldName":"College"
                                                },
                                                {
                                                  "oldData":80,
                                                  "newData":80,
                                                  "isChanged":false,
                                                  "fieldName":"Marks"
                                                },
                                                {
                                                  "oldData":"Agriculture",
                                                  "newData":"Architect",
                                                  "isChanged":true,
                                                  "fieldName":"Qualification"
                                                }
                                              ]
                            }
    },

    {
      "gender":"Male",
      "userEmail":"peter@parker.com",
      "requestSource":"Student",
      "userFirstName":"Peter",
      "requestStatus":"Rejected",
      "userLastName":"Parker",
      "requestDiscrepancy":
                            {
                              "personalInfo":
                                              [
                                                {
                                                  "oldData":"Tester",
                                                  "newData":"Developer",
                                                  "isChanged":true,
                                                  "fieldName":"User Name"
                                                },
                                                {
                                                  "oldData":25,
                                                  "newData":28,
                                                  "isChanged":true,
                                                  "fieldName":"Age"
                                                },
                                                {
                                                  "oldData":"Female",
                                                  "newData":"Male",
                                                  "isChanged":true,
                                                  "fieldName":"Gender"
                                                }
                                              ],
                              "educationInfo":
                                              [
                                                {
                                                  "oldData":"Test",
                                                  "newData":"Test",
                                                  "isChanged":false,
                                                  "fieldName":"College"
                                                },
                                                {
                                                  "oldData":80,
                                                  "newData":80,
                                                  "isChanged":false,
                                                  "fieldName":"Marks"
                                                },
                                                {
                                                  "oldData":"Arts",
                                                  "newData":"Arts",
                                                  "isChanged":false,
                                                  "fieldName":"Qualification"
                                                }
                                              ]
                              }
    }
  ]

  let modifiy = JSON.map((band)=>{  
    return[band.userFirstName,band.userLastName].join(" ");
  })
  
  console.log("concat of names",modifiy)
  
  let mode = JSON.map((item)=>{  
    return[item.userEmail,item.gender,item.requestStatus,item.requestSource].join(",");
  })
  
  console.log("email,gender,requeststatus,requestSource",mode)
  
  let val = JSON.map((gave)=>{  
    return gave.requestDiscrepancy.personalInfo;
  })
  
  console.log("Display personalInfo",val)
  
  let val1 = JSON.map((gave)=>{  
    return gave.requestDiscrepancy.educationInfo;
  })
  
  console.log("Display educationInfo",val)
  

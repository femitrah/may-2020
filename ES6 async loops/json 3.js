// 4. Highlight the approved request( use `requestStatus` column) as color green, for rejected use red. For pending just use black.
const js  = [
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

  let val = JSON.filter((scope)=>{  
    return scope.requestStatus == "Approved";
  })

console.log("Approved",val)

let val1 = JSON.filter((scope)=>{  
return scope.requestStatus == "Rejected";
})

console.log("Rejected",val1)

let val2 = JSON.filter((scope)=>{  
return scope.requestStatus == "Pending";
})


console.log("Pending",val2)

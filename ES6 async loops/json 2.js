// 2. Display the Discrepancy data in bold which is having isChanged column as true.
// 3. Display a checkbox above the table to filter the table values based on isChanged column. If we check then show only records which is isChanges as true.
const JSON  = [
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

  let val = JSON.map((gave)=>{  
    return gave.requestDiscrepancy.personalInfo.filter((scope)=>{  
        return scope.isChanged==true;
      })

  })
  console.log("ischanged is true ",val)

  let scope = JSON.map((gave)=>{  
    return gave.requestDiscrepancy.educationInfo.filter((scope)=>{  
        return scope.isChanged==true;
      })

  })
  console.log("ischanged is true ",scope)
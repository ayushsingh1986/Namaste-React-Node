// const heading=React.createElement("h1", {id: "heading"}, "Hello World from React!");


// console.log(heading);//object
//     const root= ReactDOM.createRoot(document.getElementById("root"));

//     root.render(heading);

//ReactElement is an object which becomes an HTML that the browser understands. While it is rendering to the DOM it converts to an HTML 


//Nested HTML Element
    // const parent=React.createElement("div",{id: "parent"},


    //     React.createElement("div",{id: "child"},
    //         React.createElement("h1",{}, "I'm H1 TAG")
    // )

    // )

    // console.log(parent);
    // const root= ReactDOM.createRoot(document.getElementById("root"));

    // root.render(parent);



    // <div id="parent">
    //     <div id="child">

    //         <h1> I'm an H1 tag. </h1>
    //         <h2> I'm an h2 tag. </h2>
            
    //     </div>
    // </div>




//Nested HTML Element with 2 H1, h2 siblings
    // const parent=React.createElement("div",{id: "parent"},


    //     React.createElement("div",{id: "child"},
    //         [React.createElement("h1",{}, "I'm H1 TAG"), React.createElement("h2",{}, "I'm H2 TAG")

    //         ]
    // )

    // )

    // console.log(parent);
    // const root= ReactDOM.createRoot(document.getElementById("root"));

    // root.render(parent);

// <div id="parent">
//      <div id="child1">

//          <h1> I'm an H1 tag. </h1>
//          <h2> I'm an h2 tag. </h2>
            
//      </div>
//      <div id="child2">

//          <h1> I'm an H1 tag. </h1>
//          <h2> I'm an h2 tag. </h2>
            
//      </div>
//  </div>
const parent=React.createElement("div",{id: "parent"},

[
    React.createElement("div",{id: "child1"},
        [React.createElement("h1",{}, "I'm H1 TAG"), React.createElement("h2",{}, "I'm H2 TAG")

        ]
),
React.createElement("div",{id: "child2"},
    [React.createElement("h1",{}, "I'm H1 TAG"), React.createElement("h2",{}, "I'm H2 TAG")

    ]

)
]);
console.log(parent);
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



//When createElement is called an object is created. This object is react elemnt.While it is rendering to the DOM it converts to an HTML element which browser understands.


//JSX


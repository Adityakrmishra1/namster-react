/*


*/


// putting element in dom and removing element in dom is the consty
// things to perfrom for the browser
// manupulating the dom using js / react.

const heading = React.createElement("h1", { id: "heading" }, "Heelo React");
console.log(heading); // object
console.log(ReactDOM);


const root = ReactDOM.createRoot(document.getElementById("root"));
// const hii = ReactDOM.createRoot(document.getElementById("hii"));

// root.render(heading);


// render will create object to html in the dom.

/*
	nested structure

	<div id="partent">
		<div id="child">
			<h1> Hi </h1>	
		</div>
	</div>
*/
const h2Heading = React.createElement("h2", {}, "heeee");

let child = React.createElement('div', { id: "child" }, [heading, h2Heading]);
let partent = React.createElement('div', { id: "parent" }, child);
console.log(parent);
root.render(partent);
// hii.render(h2Heading)


// we are not using React.createElement() we are using JSX so that
// our life will be eaiser

// react is library it can be implemented on single part of the website existing web.




// JSX
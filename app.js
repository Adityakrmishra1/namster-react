/*
	create by Aditya Kumar mishra
	on June 29, 2023
*/

// import React from "react";
// import ReactDOM from "react-dom/client";


// putting element in dom and removing element in dom is the consty
// things to perfrom for the browser
// manupulating the dom using js / react.

// const heading = React.createElement("h1", { id: "heading" }, "Heelo React 🚀");
// console.log(heading); // object
// console.log(ReactDOM);


// const root = ReactDOM.createRoot(document.getElementById("root"));
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
// */
// const h2Heading = React.createElement("h2", {}, "heeee");

// let child = React.createElement('div', { id: "child" }, [heading, h2Heading]);
// let partent = React.createElement('div', { id: "parent" }, child);
// console.log(parent);
// root.render(partent);


// hii.render(h2Heading)

// we are not using React.createElement() we are using JSX so that
// our life will be eaiser
// react is library it can be implemented on single part of the website existing web.
// npm does stand for node package manager although it's manges the packages.
// difference between package.json and package.lock.json 
// node_modules => contanis all the code (transitive dependencies)
// just put things on github that can't be genrated (if genrated then it can't be pushed.)
// ~ and ^ differences 
// bundler (parcel, webpack, veet) etc.
// npx parcel index.html (igninte our app) parcel created a server
// local server and dev bulild
// HMR (hot module replacement)
// file matching algorithm is = written in the c++ 
// it will keep track of everything (watching)
// parcel give faster builds because of the cahcing it does.
// it will do image optimization most expensive thing in browswer it to load images
// it will minification of our files as well
// bundling
// compress our files
// diagnostic and error handling.
// host on https
// treee shaking - remove unused code 
// different build for the development and production.
// to create a production build npx parcel build index.html

// browserslist help for coverage of browsers.
// npx and npm ( executing a package we used to npx ) and to install a package npm
// npm install react react-dom (npm i is small version of install)


import { title } from "process";
import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement("h1", {}, "hello from this side");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//JSX  
/*
	react can be written without JSX but JSX makes our life easier
	jsx is not part of React since creating elements in react is not 
	user friendly so we have to use JSX instead.
	attributes will be camelCase in JSX
*/

const jsxHeading = <h1 id="heading" className="head" tabIndex="1"> 🚀 Hello from this side 🚀</h1>
console.log(jsxHeading);

// if writing in multiple lines then we have wrap it into parentheses.

const jsxHeadingMultiLine = (<h1 id="heading2" className="head">
	🚀 Hello from this side 🚀
</h1>);


// Js engine will not understand jsx because js engine understands ecma script.
// this is not html but it's JSX (not html inside javascript)
// jsx is html-like syntax or xml-like syntax

// how then it's working ? 
// parcel is the one whow is parsing it. 

// JSX code is transpiled before it's reaching to JS engine .
// transpiling is done by parcel here parcel is not doing transpiling it gives
// resposibility to babel. 
// babel is transpiling our code 
// when we write JSX code then it will be converted to object (react.createElement())
// JSX => React.createElement() =>  ReactElement JS Oject => HTMLElement(render);
// babel 


// React Component....
// Everything in react is components.
// 2 types of components 
// class based and functional components.
// class based is old way of doing things (no body uses it...)

// React Functional components
/*	
	it's a just normal javascript function.
	it's should be start with Captial Letter.

*/

const Title = () => {
	return <h1 className="head" tabIndex="5"> namaste react using JSX</h1>
}
const Name = () => {
	return <h1 className="head" tabIndex="3"> hi i'm aditya</h1>
}
// react composition adding one component to other components.

// we can write javascript inside the JSX

const titles = (<h1 className="head">Hiii bhai log</h1>);

// here while executing the javascript , let's say someone can send malicious js
// so they can exectute the js. 
// But JSX can take care of the injection attack ( cross site scripting ).
// JSX will not blinding run the data it will take care of the injection attack.
// JSX sanitizes the piece of the code so malicious attacker can be prevented atuomically.

let a = 1000;
const HeadingComponent = () => {
	return (<div id="container">
		<h2>{a * 2 % 3 + 5} </h2>
		{titles}
		{Title()}
		<Title />
		<Title></Title>
		{Name()}
		{/* <Title /> */}
		<h1 className="heading"> 🚀 I'm a react component guys 🚀</h1>
		{/* <Name /> */}
	</div>);
}

// if we have more than 2 element at root level just wrap it in the div
// React Fragment 







root.render(<HeadingComponent />);




// class based components
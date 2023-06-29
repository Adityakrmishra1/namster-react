/*
	create by Aditya Kumar mishra
	on June 29, 2023

*/

import React from "react";
import ReactDOM from "react-dom/client";


// putting element in dom and removing element in dom is the consty
// things to perfrom for the browser
// manupulating the dom using js / react.

const heading = React.createElement("h1", { id: "heading" }, "Heelo React 🚀");
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
// to create a production build npx parcel build 


// npx and npm ( executing a package we used to npx ) and to install a package npm

// npm install react react-dom (npm i is small version of install)

// JSX



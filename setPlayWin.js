import {useState} from "react";
import "./styles.css"; 

const content = [
[
"something goes here",
"something goes here",
"something goes here",
"something goes here"
],
[
"something goes here",
"something goes here",
"something goes here",
"something goes here"
],
[
"something goes here",
"something goes here",
"something goes here",
"something goes here"
],
[
"something goes here",
"something goes here",
"something goes here",
"something goes here"
]
];

export default function App(){
	const [activeContentIndex, setActiveContentIndex ] = useState
return (
<div>
<header>
<img src = "react-logo-xs.png" alt = "React logo"/>
<div>
<h1>SetPlayWin</h1>
<p>i.e, using the react library for rendering the UI</p>
</div>
</header>
<div id="tabs">
<menu>
<button 
	className={activeContextIndex === 0 ? "active" :""}
	onClick={() => setActiveContextIndex(0)}
	>
	Why React?
	</buttton>
		<button 
			className={activeContextIndex === 1 ? "active" :""}
			onClick={() => setActiveContextIndex(1)}
		>
	Core Features
	</buttton>
		<button 
			className={activeContextIndex === 2 ? "active" :""}
			onClick={() => setActiveContextIndex(2)}
		>
	Related Sources
	</buttton>
		<button 
			className={activeContextIndex === 3 ? "active" :""}
			onClick={() => setActiveContextIndex(3)}
		>
		</button>
		</menu>
		<div id="tab-content">
		<ul>
		{content[activeContentIndex].map((item) => (
		<li key={item}>{item}</li>
		))}
		</ul>
		</div>
	</div>
</div>
	);
}
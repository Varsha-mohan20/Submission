import React from 'react';

const today = new Date();
// const intarr = [1,2,3,4];
const name = "Varsha";
function formatDate(date){
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday:'long'}
    ).format(date);
}
const ExampleToDoList = () => {
    return (
        // <h1>To Do List for {Object.name} {Object.age} {formatDate(today)}</h1>
        <>
            <h1 style={{ color: 'red', fontSize: '20px' }}>To Do List for {formatDate(today)}</h1>
            <div style={{ background: 'black', color: 'pink' }}>
            <h1>{name}'s, Todos</h1>
            <img
                src="https://i.imhur.com/yxOvdOSs.jpg"
                alt={name}
                className="photo" />
                <ul>
                    <li>Invent new traffic lights</li>
                    <li>Rehearse a movie scene</li>
                    <li>Improve the spectrum technology</li>
                </ul>
                </div>
                </>
    );
};
export default ExampleToDoList;

const baseUrl = 'https://i.imgur.com';
const person = {
    name: 'Varsha',
    imageId:'7vQD0fp',
    imageSize:'s',
    theme: {
        background:'black',
        color:'pink'
    }
};
// const src = `${baseUrl}/${person.imageId}${person.imageSize}.jpg`;
const src1 = baseUrl + '/' + person.imageId + person.imageSize + '.jpg';
export function FIX_ERROR01(){
    return(
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
                <img
                className ="avatar"
                src = {src1}
                alt={person.name}
                />
                <ul>
                    <li>Invent new traffic lights</li>
                    <li>Rehearse a movie scene</li>
                    <li>Improve the spectrum technology</li>
                </ul>
        </div>
    );
}

export function Welcome(props){
    return <><h1>Welcome {props.name},</h1><h2>Your ID is: {props.id}</h2></>
}
import React from 'react';

const EducationItem = (props) => {

    const getYear = () => {
        return props.year;
    }

    const getTitle =() =>{
        return props.title;
    }

    const getContent = () =>{
        return props.content;
    }

    return (
        <div style={{margin:1+'%'}}>
            <strong style={{float:"left"}}>{getYear()}</strong>
            <div className="discribe" style={{width:95+'%',background:"gainsboro",marginLeft:5+'%'}}>
            <p style = {{padding:1+'%'}}><strong>{getTitle()}</strong></p>
            <p style = {{padding:1+'%'}}>{getContent()}</p>
            <div/>
        </div>
        </div>
    )
}

export default EducationItem;
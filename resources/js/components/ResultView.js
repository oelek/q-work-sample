import React from "react";

const ResultView = ({word, text, count}) => {
    return (
        <div className={'block content-container'}>
            <div className={'content-header'}>
                {word && <div className={'content-header-inner'}>{word} x {count}</div>}
            </div>
            <div className={'content-main'} dangerouslySetInnerHTML={{__html: text || ''}}>
            </div>
        </div>
    )
}

export default ResultView

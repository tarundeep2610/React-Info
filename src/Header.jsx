import reactLogo from './assets/react.svg';

export default function Header({theme, handleClick}){
    // console.log(handleClick);
    let position= theme?"right":"left";
    let themeClass= theme?'':'light';

    return (
        <div className={`nav ${themeClass}`}>
            <div className='logo'>
                <img src={reactLogo} className="logo"></img>
                <h2>ReactFacts</h2>
            </div> 
            <div className='theme'>
                <p id='light-text' className={theme?`blur`:''}>Light</p>
                <div className='theme-btn' onClick={handleClick}>
                    <div className={`slider ${position}`} ></div>
                </div>
                <p id='dark-text' className={theme?'':'blur'}>Dark</p>
            </div>
        </div>
    );
}
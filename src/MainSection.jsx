export function MainSection({theme}){

    let themeClass= theme?'':'light';
    return (
        <div className={`main-section ${themeClass}`}>
            <h1>Fun facts about React</h1>
            <ul>
                <li>
                    <p>Was first released in 2013</p>
                </li>
                <li>
                    <p>Was originally created by Jordan Walke</p>
                        </li>
                <li>
                    <p>Has well over 100K stars on GitHub</p>
                </li>
                <li>
                    <p>Is maintained by Facebook</p>
                </li>
                <li>
                    <p>Powers thousands of enterprise apps, including mobile apps</p>
                </li>
            </ul>
        </div>
    );
}
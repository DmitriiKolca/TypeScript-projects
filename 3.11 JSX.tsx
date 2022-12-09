// в tsconfig.json включить  "jsx": "react",
// установить npm install react
//// установить npm install -D @types/react

const JsxElement: JSX.Element = <>
    <div tabIndex={15}>
        1+1
    </div>
    <div>
        SecondBlock
        <span>
        {10 + 10}
    </span>
    </div>
</>
// Следующие выражение равносильно первому div
const JSXElement2: JSX.Element = React.createElement('div', {tabIndex: 15}, '1+1')
import { useState } from "react";

function App() {
    // statr라는 측수 변수를 만들 때 useState();useState(); 사용
    const [count, setCount] = useState(100);
    return (
        <div>
            <h1>Counter : {count}</h1>
            {/* 태그의 속성을 적어중줄때 그 안에 자바스크립트를 작성해야한다면 "" 로 써 주는 게 아니라 {} 로 써 줘야 함
          ==> 컴포넌트 문 안에 자바스크립트를 쓰겠다는 의미 */}
            <button
                onClick={() => {
                    // 카운트 라고 하는 변수에 지금 현재 카운트의 값 - 1의 값이 저장되면 됨
                    //count = count - 1;(일반 변수라면)
                    setCount(count - 1);
                }}>
                -
            </button>
            <button
                onClick={() => {
                    setCount(0);
                }}>
                Reset
            </button>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}>
                +
            </button>
        </div>
    );
}

export default App;

import { useState } from "react";

function App() {
    // 사용자가 입력할 인풋의 값을 저장하기 위해 만든 state
    //  태그에 입력되는 값은 무조간 스트링
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    const onChange = event => {
        // input 에 todo라는 state에 입력받은 값을 저장시켜야 함.
        //event 라고 하는 Javascript엔진이 분삭한 사건 내용을 가지고 보니
        // event.target.value 하는 값이 input 에 입력된 값이 들어있더라.
        setTodo(event.target.value);
    };

    const onSubmit = event => {
        // Chrome같은 웹브라우저는 기본적으로 onSubmit이 내장되어있는 기능이 존재함.
        // 무슨 기능이냐면, input의 내용을 전송하고,새로고침하는기능
        // 이 ㅣ능을 무효화 시킬 필요가 있음.=> event.preventDefault();
        event.preventDefault();

        if (todo === "") {
            return;
        }

        //todo에 저장되어 있는 값을 list로 옮기고
        setList([...list, todo]);
        // todo의 값을 삭제하고
        setTodo("");
        // input에 값을 삭제해야함 -> input태그의 value속성을 비워야하는 일
    };

    const deleteTodo = (index) => {
        // 우리가 삭제해야하는 것은 index로 접근 할 수 있음 => list에 접근
        // 우리가 삭제하려는 button에 걸린 인덱스 : index, filter를 통해 걸러내려는 index번호 : i
        setList(
            list.filter((v, i) => {
                return i !== index;
            }),
        );
    };

    return (
        <div>
            <h1>My TODO ({list.length})</h1>
            {/*  form 태그 내부에서 엔터를치거나 버튼을 누르면 form의 submit속성을 실행시킴*/}
            <form onSubmit={onSubmit}>
                {/* input에 입력이 일어 날 떄마다 실행하는 속성 : onChange
                    입력이 일어난 사건(임벤트) 이고,
                    그에 대해서 함수를 실행 할 떄 매개변수 자리에 Javascript엔진이 그 사건을 분석해서 객체로 전달해 줌 */}
                <input
                    // 스프레드 문법(...) : 배열이나 객체 내부 요소 나열시키는 문법
                    placeholder={"write your to do..."}
                    onChange={onChange}
                    value={todo}
                    // input에서 엔터를 ㅊ면 onSubmit이 발동되고, onSubmit안의 setTodo를 살행시텨서 todo의 값은 빈 스트링으로 바꾸고,
                    // 리액트 엔진이 todo가 사용됟고 있는 input의 value값을 다시 그리고
                    // input의 value가 ""인 상태로 화면에 출력됨
                />
                <button>Add To do</button>
            </form>
            <hr />
            <ul>
                {/*
                    list라고 하는 array가 갖고 있는 요소의 갯수만큼
                    li태그가 찍히면서 그 안에 요소의 내용을 촐력해주면 됨  =>  .map() 메소드
                    .map(함수)메소드는 요소를 순회하면서 함수 return안의 내용을 반환함.
                    .map((value, index, array) => {})
                    map을사용한다면, 반환되는 return에 나오는 최상단 태그에 key라는 속성을 부여하고,
                                                                그 값은 map이 반환하는 퇴상댄 태그들 사이에어 겹치지 않는 유일값을 넣어야함.
                 */}
                {list.map((value, index) => {
                    return (
                        <li key={index}>
                            {value}
                            <button onClick={()=> deleteTodo(index)}>❌</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;

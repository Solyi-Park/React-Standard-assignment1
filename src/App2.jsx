import { useState } from "react";
function App2() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");


  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item}`;
    });
    setResult(temp);
  };

  const handleFilter = function () {
    const filtered = array.filter((item, index) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = array.map(function (item, index) {
      return item.toUpperCase();
    });
    setResult(mapped);
  };

  // reduce: 배열 api, 콜백함수 -> 누적된값, 현재값 인자로 들어감
  // 첫 순회에서 맨 앞 두개 값 가져온다.
  // 현재 값은 그 다음에 더해줄 값
  // reduce는 누적값은 return문으로 출력
  //누적값 현재값 콘솔 찍어보기
  const handleReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setResult(reduced);
  };
  //  왜 array.push로 했을 때 변화가 없는지 설명하기!
  // 리액트가 변화를 감지하는 방법은 오직 set State를 통해서만 가능하다.
  const handlePush = function () {
    if (query.length <= 0) {
      alert("추가하시려는 값을 입력해주세요.");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    // array.pop()으로는 백날 안됨..
    //1. 원본 배열을 통해 pop한 값을 저장함(임시변수에)
    const newArr = [...array];
    newArr.pop();

    //2. setArray
    setArray(newArr);
    //3. array를 기반으로 result생성(setResult)
    setResult(newArr.join(", "));
  };

  return (
    <div>
      <h1>Standard반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
export default App2;



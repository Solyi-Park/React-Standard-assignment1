import { useState } from "react";
function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [arr, setArr] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = function () {
    let temp = "";
    arr.forEach(function (item, idx) {
      temp += `${idx}: ${item} `;
    });
    setResult(temp);
  };
  const handleFilter = function () {
    const filtered = arr.filter((item) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = arr.map((item) => {
      return item.toUpperCase();
    });
    setResult(mapped.join(", "));
  };

  //reduce는 join사용 불가!
  const handleReduce = function () {
    const reduced = arr.reduce((acc, current) => {
      // console.log(acc);
      // console.log(current);
      return `${acc} + ${current}`;
    });
    setResult(reduced);
  };

  const handlePush = function () {
    if (query.length <= 0) {
      alert("추가할 값을 입력해주세요.");
      return false;
    }
    // arr 값이 변하는 건 query가 추가된 배열이 다시 arr에 할당 되어선가유..?
    const newArr = [...arr, query];
    setArr(newArr);
    setResult(newArr.join(", "));
  };

  // newArr를 만들어도 계속 arr가 바뀌는 것은 같은 데이터 주소를 사용하기때문..? 원본의 불변성을 보존할 방법은?
  const handlePop = function () {
    const newArr = [...arr];
    newArr.pop();
    setArr(newArr);
    setResult(newArr.join(", "));
  };

  const handleSlice = function () {
    const sliced = arr.slice(1, 4);
    setResult(sliced.join(", "));
  };

  const handleSplice = function () {
    const newArr = [...arr];
    newArr.splice(2, 2, "kiwi", "lime");

    setArr(newArr);
    setResult(newArr.join(", "));
  };

  const handleIndexOf = function () {
    const indexOfItem = arr.indexOf(query);
    setResult(indexOfItem);
  };

  const handleIncludes = function () {
    const includesItem = arr.includes(query);
    //  console.log(includesItem) // true/false
    //  setResult(includesItem); 이렇게는 작동 안함.
    setResult(includesItem ? "true" : "false");
  };

  const handleFind = function () {
    const findItem = arr.find((item) => item.includes(query));
    const found = findItem !== undefined ? findItem : "NotFound";
    setResult(found);
  };

  const handleSome = function () {
    const someResult = arr.some((item) => item.includes(query));
    setResult(someResult ? "true" : "false");
  };

  const handleEvery = function () {
    const everyResult = arr.every((item) => item.includes(query));
    setResult(everyResult ? "true" : "false");
  };

  const handleSort = function () {
    const sorted = arr.sort()
    setResult(sorted.join(", "));
  };

const handleJoin = function () {
  const joinResult = arr.join(query);
  setResult(joinResult);
}


  return (
    <div>
      <h1>Standard반 배열 API 테스트</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {/* e.target는 <input> 요소를 가리키고, e.target.value는 사용자가 입력한 텍스트 값을 나타냄 */}
      {/* value는 초기 렌더링 시의 값이고, e.target.value는 사용자 입력에 따라 동적으로 변하는 값 */}
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{arr.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;

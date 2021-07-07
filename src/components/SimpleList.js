// 1
const numbers = [1, 2, 3, 4];

// array of list item HTML elements that needs to be displayed
const numbersList = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];

function SimpleList() {
  return (
    <div className="list">
      <h2>SimpleList</h2>
      {numbersList}
    </div>
  );
}

export default SimpleList;

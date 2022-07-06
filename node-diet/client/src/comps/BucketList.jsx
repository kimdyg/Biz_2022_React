const onClick = () => {
  const food = document.querySelector("input[name='food']");
  const date = document.querySelector("input[name='date']");
};

const BucketList = ({ bucketList }) => {
  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>
            날짜
            <input />
          </th>
          <th>
            식품명
            <input />
          </th>
          <th>
            섭취량
            <input />
          </th>
          <th>
            칼로리
            <input />
          </th>
          <th>총칼로리</th>
        </tr>
        <button>저장</button>
      </thead>
      {bucketList.map((food) => {
        return (
          <tr>
            <td>날짜{food.b_sdate}</td>
            <td>식품명{food.b_bucket}</td>
            <td>섭취량{food.b_count}</td>
            <td>칼로리{food.b_cal}</td>
            <td>총칼로리</td>
          </tr>
        );
      })}
    </table>
  );
};

export default BucketList;

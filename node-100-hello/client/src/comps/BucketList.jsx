const BucketList = ({ bucketList }) => {
  const bucketBody = bucketList.map((a) => {
    return (
      <tr>
        <td>{a.b_bucket}</td>
      </tr>
    );
  });

  return (
    <table className="w3-table w3-table-all">
      <tbody>{bucketBody}</tbody>
    </table>
  );
};

export default BucketList;

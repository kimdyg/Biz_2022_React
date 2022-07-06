import { useState, useEffect } from "react";
import BucketList from "./BucketList";

const BucketInput = () => {
  const [bucketList, setBucketList] = useState([]);

  const fetchBuckList = async () => {
    const response = await fetch("http://localhost:3000/bucket/list");
    const jsonBuck = await response.json();
    setBucketList(jsonBuck);
  };

  useEffect(() => {
    fetchBuckList();
  }, []);
  /* const onKeyDown = (e) => {
    console.log(e.target.value);
    if (e.keyCode === 13) {
      console.log(e.target.value);
      const bucket = {
        b_bucket: e.target.value,
        b_flag: 1,
        b_sdate: "2022",
        b_cancel: false,
        b_cal: e.target.value,
        b_count: e.target.value,
      };

      // fetch 를 사용하여 POST 로 서버로 데이터 보내기 위한 설정
    }
  }; */

  const b_ck = (e) => {
    const bucket = {
      b_flag: 1,
      b_sdate: "2022",
      b_cancel: false,
      b_bucket: e.target.value,
      b_cal: e.target.value,
      b_count: e.target.value,
    };
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bucket),
    };
    fetch("http://localhost:3000/bucket", postData)
      .then((res) => res.text())
      .then((result) => {
        if (result === "OK") {
          fetchBuckList();
        }
      });
  };

  return (
    <>
      <BucketList bucketList={bucketList} />
      <input placeholder="food" className="w3-input" />
      <input placeholder="food" className="w3-input" />
      <input placeholder="food" className="w3-input" />
      <button onclick="">저장</button>
    </>
  );
};
export default BucketInput;

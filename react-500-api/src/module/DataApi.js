/* 
    fetch 함수를 사용하여 data.go.kr 의 API 연결하기
*/
const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "01yTxNL8EUF7%2FZiFf7jJE%2FSZ148YYtW%2F9Q12IZvKdDlljYHfs2fHx%2BXbgtKE7g2DqdihlN%2FyZSHLWx%2FKhKybBg%3D%3D";
const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNO=1&numOfRows=100`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};

export { fetchData };

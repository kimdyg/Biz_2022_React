function End(props) {
  //props 에서 name 변수를 분해하여 선언하기
  const { name } = props;

  /* 
  jsx 의 tag 규칙
  여러 tag 를 사용할때는 반드시 가장 바깥쪽을 감싸는 group tag가 있어야 한다
  <div></div>
  <div></div>
  <div></div>
  <p></p>

  <div>
    <div></div>
    <div></div>
    <div></div>
    <p></p>
  </div>
  
  <>
    <div></div>
    <div></div>
    <div></div>
    <p></p>
  </>
  */
  return (
    <>
      <h3> Sub 에서 받은 name = {name}</h3>
    </>
  );
}
export default End;

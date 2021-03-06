const End2 = ({ name }) => {
  // 현재 comp에서만 사용할 수 있도록 private Style을 지정하고
  // tag comp 에 style keyword 를 사용하여 지정한다
  // 단 style 의 속성 이름은 kebab-case(font-style) 를 사용할 수 없고
  // 마이너스 기호를 제거하고 Camel-case 로 사용해야 한다
  // 속성 값들은 반드시 문자열로 만들어야 한다
  const h1Style = {
    color: "blue",
    fontStyle: "italic",
  };

  return (
    <>
      <h1 style={h1Style}>내가 받은 name = {name}</h1>
    </>
  );
};
export default End2;

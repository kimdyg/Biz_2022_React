const Input = ({ aText, setAText }) => {
  const onChangeEvent = (e) => {
    const value = e.target.value;
    setAText(value);
  };
  return (
    <>
      <input
        name="aText"
        value={aText}
        placeholder="text 입력"
        onChange={onChangeEvent}
      />
    </>
  );
};
export default Input;

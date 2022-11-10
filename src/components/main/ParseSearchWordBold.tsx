const ParseSearchWordBold = ({ searchWord, text }: { searchWord: string; text: string }) => {
  const findIdx = text.indexOf(searchWord);

  const preText = text.slice(0, findIdx);
  const afText = text.slice(findIdx + searchWord.length);

  return (
    <p>
      {preText}
      <span style={{ fontWeight: 'bold' }}>{searchWord}</span>
      {afText}
    </p>
  );
};

export default ParseSearchWordBold;

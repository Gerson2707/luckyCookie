import getRandomFromArray from "../utils/getRandomFromArray";
import phrases from "../utils/phrases.json";
import arrImages from "../utils/arrImages.json";
import "./styles/BtnPhrase.css";

const BtnPhrase = ({ setPhraseRandom, setImageSelected }) => {
  const handleClick = () => {
    const newPhrase = getRandomFromArray(phrases);
    setPhraseRandom(newPhrase);

    const background = getRandomFromArray(arrImages);
    setImageSelected(background);
  };

  return (
    <button className="card_btn" onClick={handleClick}>
      <span>Lucky click</span>
    </button>
  );
};
export default BtnPhrase;

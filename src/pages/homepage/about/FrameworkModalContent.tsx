import ColorColumnsContainer from "../../../components/colums/ColorColumnsContainer";
import { LANGUAGES } from "../../../development/data";

const FrameworkModalContent = () => {
  return (
    <div>
      <ColorColumnsContainer items={LANGUAGES} />
    </div>
  );
};

export default FrameworkModalContent;

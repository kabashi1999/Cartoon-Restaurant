import SubHeading from "../../components/SubHeading/SubHeading";
import { data, images } from "../../constants";
import "./Laurels.css";

type Award = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

type AwardCardProps = {
  award: Award;
};

const AwardCard = ({ award }: AwardCardProps) => {
  return (
    <div className="app__laurels_awards-card">
      <img src={award.imgUrl} alt="awards" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {award.title}
        </p>
        <p className="p__opensans">{award.subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;

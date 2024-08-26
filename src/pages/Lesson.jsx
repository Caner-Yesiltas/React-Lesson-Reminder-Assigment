import Footer from "../components/Footer";
import Header from "../components/Header";
import LessonCard from "../components/LessonCard";

import data from "../helper/data";

const Lesson = () => {
  console.log(data);

  return (
    <div className="container">
      <Header />
      <div className="title" > <h1> ~ Lesson Reminder ~</h1> </div>
     

      <div className="main">
        {data.map((item) => (
          <LessonCard {...item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Lesson;

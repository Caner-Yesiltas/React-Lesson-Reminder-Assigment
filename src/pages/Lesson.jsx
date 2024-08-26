import Header from "../components/Header";
import LessonCard from "../components/LessonCard";

import data from "../helper/data"



const Lesson=()=>{
    console.log(data);
    
    return(
        <div className="container">
           <Header />
           <h2>Lesson Reminder</h2>

           <div>
          {
           data.map((item) => (
            <LessonCard {...item} />
           ) )}
           </div>
       
        </div>
    )
};

export default Lesson;
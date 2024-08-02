import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaArrowUp } from "react-icons/fa6";

function EducationTimeline() {
  return (
    // <VerticalTimeline>
    //   <VerticalTimelineElement>
    //     <div>
    //       <div>
    //         <h1>B.Tech in Computer Science &and; Engineering</h1>
    //         <h3>(ongoing)</h3>
    //       </div>
    //     </div>
    //   </VerticalTimelineElement>
    // </VerticalTimeline>
    <VerticalTimeline lineColor="rgb(36, 249, 210)">
      <VerticalTimelineElement
        className=""
        contentStyle={{
          background: "#0d281c",
        }}
        contentArrowStyle={{ borderRight: "7px solid #0d281c" }}
        date="2023 - present"
        iconStyle={{ background: "#0d281c" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="text-xl sm:text-lg font-semibold">B.Tech in CSE</h3>
        <h4 className="text-base sm:text-sm">
          Kalinga Institute of Industrial Technology
        </h4>
        <p>1st year CGPA : 9.54</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className=""
        contentStyle={{
          background: "#0d281c",
        }}
        contentArrowStyle={{ borderRight: "7px solid #0d281c" }}
        date="2021 - 2023"
        iconStyle={{ background: "#0d281c" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="text-xl sm:text-lg font-semibold">
          Higher Secondary (10 + 2) - WBCHSE
        </h3>
        <h4 className="text-base sm:text-sm">Springdale High School (H.S.)</h4>
        <p>Percentage : 85.2%</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className=""
        contentStyle={{
          background: "#0d281c",
        }}
        contentArrowStyle={{ borderRight: "7px solid #0d281c" }}
        date="2020 - 2021"
        iconStyle={{ background: "#0d281c" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="text-xl sm:text-lg font-semibold">
          Secondary (10) - WBBSE
        </h3>
        <h4 className="text-base sm:text-sm">Springdale High School (H.S.)</h4>
        <p>Percentage : 91.57%</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "#0d281c" }}
        icon={<FaArrowUp />}
      />
    </VerticalTimeline>
  );
}

export default EducationTimeline;

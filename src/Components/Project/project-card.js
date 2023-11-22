// import React from "react";
// const ProjectCard = (props) => {
//   let { title, description, url, image } = props;
//   return (
//     <div className="flex justify-between bg-white">
//       <div className="flex-1 p-5">
//         <img src={image} alt="" />
//         <div className="p-5">
//           <a
//             href={url}
//             className=" text-blue-950"
//             target="_blank"
//             rel="noreferrer"
//           >
//             {`Click here-${title}`}
//           </a>
//         </div>
//         <div className="p-5">
//           <p>{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import { ExternalLink } from "lucide-react";
import React from "react";
const ProjectCard = (props) => {
  let { title, description, url, image } = props;
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    maxWidth: "300px",
    margin: "0 auto",
  };

  const imageStyle = {
    maxWidth: "100%", // Make sure the image does not exceed the card's width
    height: "100px", // Maintain the image's aspect ratio
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt="" style={imageStyle} />
      <div className="pt-5 flex gap-2">
        <p>{title}</p>
        <a href={url} target="_blank" rel="noreferrer">
          <ExternalLink size={20} />
        </a>
      </div>
      <div className="mt-5">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

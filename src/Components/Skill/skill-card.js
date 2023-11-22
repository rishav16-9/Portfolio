// import React from "react";

// const SkillCard = (props) => {
//   let { title, image } = props;
//   return (
//     <>
//       <div className="bg-white rounded-lg">
//         <img
//           className="rounded-t-lg object-fill img-h-w"
//           src={image}
//           alt="skill-img"
//         />
//         <div className="p-5">
//           <p className="font-normal text-gray-700 dark:text-gray-400 ">
//             {title}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SkillCard;

import React from "react";

const SkillCard = (props) => {
  let { title, image } = props;

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
      <div className="mt-5">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SkillCard;

import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SubmissionModal from "../SubmissionModal";
import PromptModal from "../PromptModal";

export default function Beginner() {
  // USE FOR DB STUFFS
  // const { loading, error, data } = useQuery(QUERY_CHALLENGES);
  // console.log("this is datum", data);
  // console.log("dis error", error);
  // END USE FOR DB STUFFS

  return (
    // import useMutation and useQuery from client/apollo server
    // import graphQL fxn QUERY_CHALLENGES to rtn all challenges
    // iterate all challenges, organize by level
    //

    <div className="center">
      <Card>
        <CardContent>
          <Typography>Welcome to the start of your journey...</Typography>
          <PromptModal
            title={`Beginner Challenge 1`}
            description={`placeholder beginner prompt 1 description`}
          />
          <SubmissionModal
            // title={data.challenges[0].question}
            // description={data.challenges[0].questionCode}
            title={`placeholder beginner submission 1 title`}
          />
          {/* THIS CONTENT TEXT WILL REFLECT THE DB's B1 CHALLENGE DESCRIPTION - PLS CHANGE */}
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>The path ahead is treacherous...</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <Button size="small">View B2 Prompt</Button>
            {/* link button to modal for challenge prompt */}
            <Button size="small" href={SubmissionModal}>
              B2Submit Entry
            </Button>
            {/* link button to modal for challenge prompt */}
          </ButtonGroup>
        </CardActions>
      </Card>
      <Card>
        <CardContent>
          <Typography>Do you have what it takes?</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <Button size="small">View B3Prompt</Button>
            {/* link button to modal for challenge prompt */}
            <Button size="small" href={SubmissionModal}>
              B3Submit Entry
            </Button>
            {/* link button to modal for challenge prompt */}
          </ButtonGroup>
        </CardActions>
      </Card>
    </div>
  );
}

// TAKEN FROM homeSignUp/-In...
// TAKEN FROM homeSignUp/-In...
// TAKEN FROM homeSignUp/-In...

// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { animate, delay, motion } from "framer-motion";
// import { useFormControls } from "./formValidation.tsx";

// export default function HomeSignup() {
//   const inputFieldValues = [
//     {
//       name: "fullName",
//       label: "Full Name",
//       id: "user-name",
//       type: "text",
//     },
//     {
//       name: "email",
//       label: "Email",
//       id: "user-email",
//       type: "text",
//     },
//     {
//       name: "password",
//       label: "Password",
//       id: "user-password",
//       type: "password",
//     },
//   ];

//   const { handleInputValue, handleFormSubmit, formIsValid, errors } =
//     useFormControls();

//   return (
//     <div className="divWrapper">
//       <div className="signInForm center">

//         <form onSubmit={handleFormSubmit}>
//           {cardInfos.map((cardInfo, index) => {
//             return (
//               <TextField
//                 key={index}
//                 type={cardInfos.type}
//                 onBlur={handleInputValue}
//                 onChange={handleInputValue}
//                 name={cardInfo.name}
//                 label={cardInfo.label}
//                 multiline={cardInfo.multiline ?? false}
//                 rows={cardInfo.rows ?? 1}
//                 autoComplete="none"
//                 className="signInFormItem"
//               />
//             );
//           })}
//         </form>

// // <Card>
// // <CardContent>
//   <Typography title={cardInfo.title}>Do you have what it takes?</Typography>
// </CardContent>
// <CardActions>
//   <ButtonGroup>
//     <Button size="small">View Prompt</Button>
//     {/* link button to modal for challenge prompt */}
//     <Button size="small" href={SubmissionModal}>
//       Submit Entry
//     </Button>
//     {/* link button to modal for challenge prompt */}
//   </ButtonGroup>
// </CardActions>
// </Card> */}
//
//       </div>
//     </div>
//   );
// }

// NOTES
// NOTES
// NOTES

// need dialog boxes to display modal info
// map thru cardInfo to input values into dialog box
//

// hardcode this page
// map submission modal?
// map prompt modal?

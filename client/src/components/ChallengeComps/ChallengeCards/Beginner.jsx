import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SubmissionModal from "../SubmissionModal";

export default function Beginner() {
  //
  // const cardInfos = [
  //   {
  //     name: "fullName",
  //     label: "Full Name",
  //     id: "beginner1",
  //     type: "text",
  //   },
  //   {
  //     name: "email",
  //     label: "Email",
  //     id: "beginner2",
  //     type: "text",
  //   },
  //   {
  //     name: "password",
  //     label: "Password",
  //     id: "beginner3",
  //     type: "password",
  //   },
  // ];
  //
  return (
    <div className="center">
      <Card>
        <CardContent>
          <Typography>Welcome to the start of your journey...</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <Button size="small">View B1Prompt</Button>
            {/* link button to modal for challenge prompt */}
            <Button size="small" onClick={SubmissionModal}>
              {/* onClick={B_SubmitDialog.handleClickOpen} */}
              B1Submit Entry
            </Button>
            {/* link button to submission modal */}
          </ButtonGroup>
        </CardActions>
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

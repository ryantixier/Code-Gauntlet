import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useMutation } from "@apollo/client";
import { ADD_SUBMISSION } from "../../databaseOperations/mutations";

export default function SubmissionModal({ title, challengeId, authService }) {
  const [open, setOpen] = useState(false);
  const [addSubmission, { data, loading, error }] = useMutation(ADD_SUBMISSION);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const submissionText = document.getElementById("filled-multiline-static");
    const { data: user } = authService.getUser();
    if (submissionText.value) {
      try {
        const { data } = await addSubmission({
          variables: {
            challengeId,
            submitterId: user._id,
            response: submissionText.value,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
    handleClose();
  };

  return (
    <>
      <Button size="small" variant="outlined" onClick={handleClickOpen}>
        Submit Entry
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`${title}`}</DialogTitle>
        <DialogContent className="center">
          <TextField
            className="submission-modal"
            id="filled-multiline-static"
            label="Paste Your Code For Submission"
            multiline
            rows={6}
            variant="filled"
            style={{ minWidth: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

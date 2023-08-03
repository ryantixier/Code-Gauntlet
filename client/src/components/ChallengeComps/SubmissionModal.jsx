import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function SubmissionModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" variant="outlined" onClick={handleClickOpen}>
        {/* onClick={B_SubmitDialog.handleClickOpen} */}
        B1 - Submit Entry
      </Button>
      {/* link button to submission modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`${props.title}`}</DialogTitle>
        <DialogContent className="center">
          <TextField
            className="submission-modal"
            id="filled-multiline-static"
            label="Paste Your Code For Submission"
            multiline
            rows={6}
            variant="filled"
            style={{ minWidth: "100%" }}
            // defaultValue="Default Value"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

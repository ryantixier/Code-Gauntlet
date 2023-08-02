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
      <ButtonGroup>
        <Button size="small">View B1Prompt</Button>
        {/* link button to modal for challenge prompt */}
        <Button size="small" onClick={handleClickOpen}>
          {/* onClick={B_SubmitDialog.handleClickOpen} */}
          B1Submit Entry
        </Button>
        {/* link button to submission modal */}
      </ButtonGroup>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`${props.title}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>{`${props.description}`}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
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

import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import app from "../../api/firebase";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../redux/user";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "8px solid #fff",
  boxShadow: 24,
  p: 4,
  alignItem: "center",
  margin: "auto",
  textAlign: "center",
};

export default function Account(props) {
  const user = useSelector((s) => s.user.userDetails);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const userL = localStorage.getItem("userDetails");
    const x = [JSON.parse(userL)];
    if (user === null) {
      dispatch(userAction.setUser(x[0]?.email));
    }
  }, [dispatch, user]);
  const handleLogout = async () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        localStorage.clear();
        history.replace("/login");
        dispatch(userAction.setLogIn(false));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            hey
            <span>{user}</span>
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: 80,
              height: 80,
              display: "block",
              margin: "auto",
            }}
          />

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={handleLogout} onClose={props.handleClose}>
            logout
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

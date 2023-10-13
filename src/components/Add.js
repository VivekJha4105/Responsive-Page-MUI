import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  colors,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

function Add() {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginTop: "10px",
  }));

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title=""
        sx={{ position: "fixed", bottom: "0", left: "48%" }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          height={400}
          width={600}
          //   color={colors.amber[50]}
          //   bgcolor={"white"}
          padding={3}
          borderRadius={5}
        >
          <Typography variant="h4" color={colors.grey[600]} textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="https://material-ui.com/static/images/image-list/camera.jpg" />
            <Typography variant="span" fontWeight={500}>
              Jhon Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", marginTop: "1rem", fontSize: "2rem" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack
            direction="row"
            sx={{ marginTop: "1rem", marginBottom: "1rem", gap: "0.5rem" }}
          >
            <EmojiEmotions color="secondary" />
            <Image color="primary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            sx={{ gap: "1rem", boxShadow: "none" }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={{ width: "180%" }}>POST</Button>
            <Button>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;

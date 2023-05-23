import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

export default function TextareaValidator() {
  const [italic, setItalic] = useState(false);
  const [fontWeight, setFontWeight] = useState("normal");
  const [anchorEl, setAnchorEl] = useState(null);
  const [comment, setComment] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [commentList, setCommentList] = useState([]);

  const handleSend = () => {
    // Save comment and timestamp
    const newComment = {
      comment: comment,
      timestamp: new Date().toLocaleString(),
    };
    setCommentList([newComment, ...commentList]);
    setComment("");
    setTimestamp(newComment.timestamp);
  };

  return (
    <FormControl>
      <FormLabel style={{color: 'white'}}>Add Your comment</FormLabel>
      <Textarea
        placeholder="Type something here"
        minRows={3}
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        endDecorator={
          <Box
            sx={{
              display: "flex",
              gap: "var(--Textarea-paddingBlock)",
              pt: "var(--Textarea-paddingBlock)",
              borderTop: "1px solid",
              borderColor: "divider",
              flex: "auto",
            }}
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ "--ListItemDecorator-size": "24px" }}
            >
              {["200", "normal", "bold"].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="sm" />}
                  </ListItemDecorator>
                  {weight === "200" ? "lighter" : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? "soft" : "plain"}
              color={italic ? "primary" : "neutral"}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
            <Button sx={{ ml: "auto" }} onClick={handleSend}>
              Send
            </Button>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? "italic" : "initial",
        }}
      />

      {commentList.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--Textarea-paddingBlock)",
            pt: "var(--Textarea-paddingBlock)",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          {commentList.map((commentItem, index) => (
            <Card
              key={index}
              style={{
                marginTop: "10px",
                backgroundColor: "#212121",
                padding: "10px",
                borderRadius: "4px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                src={commentItem.avatar}
                alt="User Avatar"
                sx={{ marginRight: "10px" }}
              />
              <span
                style={{
                  whiteSpace: "pre-wrap",
                  overflow: "auto",
                  flexDirection: "column",
                  // textOverflow: "ellipsis"
                  flex: 1,
                  marginRight: "10px",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                {commentItem.comment}
              </span>
              <span
                style={{
                  color: "white",
                  fontSize: "12px",
                  alignSelf: "flex-end",
                  fontFamily: "sans-serif",
                }}
              >
                {commentItem.timestamp}
              </span>
            </Card>
          ))}
        </Box>
      )}
    </FormControl>
  );
}

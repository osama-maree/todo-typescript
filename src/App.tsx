import { Box, TextField, Typography } from "@mui/material";
import { useStyles } from "./style/useStyle";
import { useState } from "react";
import { todo } from "./feature/Interfaces";

const App: React.FC = () => {
  const [text, setText] = useState<String>("");
  const [completedTasks, setCompletedTasks] = useState<todo[]>([]);
  const [uncompletedTasks, setUnCompletedTasks] = useState<todo[]>([]);
  const classes = useStyles();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      // setUnCompletedTasks((prev) => [...(prev || []), newTodo]);
      setText(() => "");
    }
  };
  return (
    <Box className={classes.app} p={3} mt={5}>
      <Typography
        variant="h4"
        component={"h2"}
        my={2}
        className={classes.title}
      >
        Osama - Task &#128513;
      </Typography>
      <TextField
        className={classes.inputTodo}
        value={text}
        onKeyPress={handleKeyPress}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        inputProps={{
          style: {
            color: "white",
          },
        }}
        placeholder="Add New Task..."
        type="text"
      />
    </Box>
  );
};

export default App;

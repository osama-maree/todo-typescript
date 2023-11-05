import { Box, TextField, Typography } from "@mui/material";
import { useStyles } from "./style/useStyle";
import { useState, useReducer } from "react";
import { TaskActionType, todo } from "./feature/Types";
import tasksReducer from "./reducer/taskReducer";
import ItemList from "./component/ItemList";
const initialTasks: todo[] = [];
const App: React.FC = () => {
  const [text, setText] = useState<String>("");
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const classes = useStyles();
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && text) {
      dispatch({
        type: TaskActionType.ADD,
        payload: { completed: false, content: text },
      });
      setText(() => "");
    }
  };
  const handleDelete = (index: number) => {
    dispatch({ type: TaskActionType.DELETE, index });
  };
  const handleCompleted = (index: number) => {
    dispatch({ type: TaskActionType.COMPLETED, index });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
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
        onChange={handleChange}
        inputProps={{
          style: {
            color: "white",
          },
        }}
        placeholder="Add New Task..."
        type="text"
      />

      <Typography
        className={`${classes.todo}`}
        variant="body2"
        component={"div"}
        mt={4}
      >
        <Typography
          className={`${classes.todo}`}
          variant="body2"
          component={"div"}
        >
          {tasks.map((todo: todo, index: number) =>
            todo.completed ? null : (
              <ItemList
                key={index}
                todo={todo}
                index={index}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
              />
            )
          )}
        </Typography>

        <Typography
          className={`${classes.todo}`}
          variant="body2"
          component={"div"}
        >
          {tasks.find((todo: todo) => todo.completed) && (
            <Typography variant="body1" color="white">
              Completed Task
            </Typography>
          )}
          {tasks.map((todo: todo, index: number) =>
            todo.completed ? (
              <ItemList
                key={index}
                todo={todo}
                index={index}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
              />
            ) : null
          )}
        </Typography>
      </Typography>
    </Box>
  );
};

export default App;

import { Typography } from "@mui/material";
import { useStyles } from "../style/useStyle";
import CloseIcon from "@mui/icons-material/Close";
import { props } from "../feature/Types";

const ItemList: React.FunctionComponent<any> = ({
  todo,
  index,
  handleDelete,
  handleCompleted
}: props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={`${classes.item} ${
          todo.completed ? classes.completedItem : ""
        }`}
        component={"div"}
        mb={2}
      >
        <Typography className={classes.span} component={"span"}>
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            checked={todo.completed ? true : false}
            onClick={()=>handleCompleted(index)}
          />
          {todo.content}
        </Typography>
        <CloseIcon
          sx={{ color: "#555555", cursor: "pointer" }}
          onClick={() => handleDelete(index)}
        />
      </Typography>
    </div>
  );
};

export default ItemList;

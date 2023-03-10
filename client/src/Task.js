import DeleteIcon from "@mui/icons-material/Delete";

import "./Task.css";

const Task = ({ taskText, onClick }) => {
  return (
    // <List className="todo_list">
    //   <ListItem>
    //     <ListItemp primary={taskp} />
    //   </ListItem>
    //   <DeleteIcon fontsize="large" style={{ opacity: 0.8 }} onClick={onClick} />
    // </List>
    <>
      <div
        className=" flex justify-between items-center border-2 
border-solid border-white px-6 py-3 rounded-2xl mb-5 mt-6"
      >
        <p className="capitalize text-white">{taskText}</p>
        <div>
          <DeleteIcon
            fontsize="large"
            style={{ opacity: 0.8, color: "white", marginLeft: "2rem" }}
            className="ml-7 cursor-pointer"
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};

export default Task;

import { useState } from "react";
import axios from 'axios';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import CountdownTimer from "../../HomePage/CountdownTimer";
import toast from "react-hot-toast";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Column } from "../Column";
import "./Main.css";
import LoaderSpinner from "../../HomePage/LoaderSpinner";
import code from '../../../Code/Dsa'

export default function Main3({onNextClick}) {
  const [Loading, setLoading] = useState(false)
  const [isSubmitButtonDisbled, setIsSubmitButtonDisabled] = useState(localStorage.getItem("submit3") || false);
  const [tasks, setTasks] = useState(code);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;
    if(isSubmitButtonDisbled===true) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const handleComplete = async() => {
    toast.loading("Time Complete. Please Submit!", {duration:2000});
  };

  const reset=()=>{
    setTasks(code);
  }

  const submit=async()=>{
    let playerAnswer= tasks.map(s => s.id).join('');
    let questionId = "3";
    let time = localStorage.getItem("timer3");
    let token = localStorage.getItem("token");
    setLoading(true)
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/submit-answers`, {
          questionId: questionId,
          playerAnswer: playerAnswer,
          time: time,
        },
        {
          headers:{
            Authorization: `Bearer ${token}`,
          }
        }
      );
      const responseData = await response.data;

      setIsSubmitButtonDisabled(true);
      localStorage.setItem("submit3",true)
      onNextClick();
      localStorage.clear();
      setLoading(false)
      return toast.success(responseData.message);
    } catch (error) {
      setLoading(false)
      toast.error("Reload and Check if Other Tests are Submitted.")
      return toast.error("Error Submitting Answers!");
    }
  }

  return (
    <div className="App">
      {Loading && <LoaderSpinner/>}
      <div id="timer">
          <CountdownTimer onComplete={handleComplete} timer={'timer3'}/>
      </div>
      <h1>Given is the Jumbled DSA code. Please Rearrange and Submit.</h1>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <Column id="toDo" tasks={tasks} />
      </DndContext>

      <div style={{ display: "flex" }}>
          <button id="resetBtn" className="Btn" onClick={reset} disabled={isSubmitButtonDisbled}>
              Reset
          </button>
          <button id="submitBtn" className="Btn" onClick={submit} disabled={isSubmitButtonDisbled}
             style={{ 'backgroundColor': isSubmitButtonDisbled ? 'gray' : '#007bff'}}
          >
              Submit
          </button>
      </div>
    </div>
  );
}
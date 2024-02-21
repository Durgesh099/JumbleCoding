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
import code from '../../../Code/SQL'
import { Column } from "../Column";
import LoaderSpinner from '../../HomePage/LoaderSpinner'
import "./Main.css";


export default function Main2({onNextClick}) {
  const [Loading,setLoading]=useState(false)
  const [isSubmitButtonDisbled, setIsSubmitButtonDisabled] = useState(localStorage.getItem("submit2") || false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
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
    if(isNextButtonDisabled===false) return;
    if(isSubmitButtonDisbled===true) return;
    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const handleComplete = async() => {
    toast.loading("Time Complete. Please Submit!", {duration:2000});
    setIsNextButtonDisabled(false);
  };

  const reset=()=>{
    setTasks(code);
  }

  const submit=async()=>{
    let playerAnswer= tasks.map(s => s.id).join('');
    let questionId = "2";
    let time = localStorage.getItem("timer2");
    let token = localStorage.getItem("token");
    setLoading(true)
    try {
      // Make a POST request to the server
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
      localStorage.setItem("submit2",true)
      setLoading(false)
      return toast.success(responseData.message);
    } catch (error) {
      setLoading(false)
      return toast.error('Error submitting answers!', error.message);
    }
  }

  return (
    <div className="App">
      {Loading && <LoaderSpinner/>}
      <div id="timer">
          <CountdownTimer onComplete={handleComplete} timer={'timer2'}/>
      </div>
      <h1>Given is the Jumbled SQL code. Please Rearrange and Submit.</h1>
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
            style={{ backgroundColor: isSubmitButtonDisbled ? 'gray' : '#007bff'}}
          >
              Submit
          </button>
          <button id="nextBtn" className="Btn" onClick={onNextClick} disabled={isNextButtonDisabled} 
          style={{ 'backgroundColor': isNextButtonDisabled ? 'gray' : '#007bff'}}>
              Next
          </button>
      </div>
    </div>
  );
}
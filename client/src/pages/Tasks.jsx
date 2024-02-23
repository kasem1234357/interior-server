import React, { Suspense, useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Add, Board } from "../icons/SvgIcons";
import TaskCard from "../components/Tasks/TaskCard";
import "../styles/tasks.css";
import { useFetsh } from "../hooks/useFetsh";
import { useEffect } from "react";
import FilterBox from "../components/Boxes/filtrerBox/FilterBox";
import SortBox from "../components/Boxes/sortBox/SortBox";
import axiosConfig from "../configs/axiosConfig";
const currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

function Tasks() {
  const navigate = useNavigate();
  const [draggableEl, setDraggableEl] = useState("");
  const [dropType, setDropType] = useState("");
  const [tasksData, setTasks] = useState([]);
  const [sortMethod, setSortMethod] = useState("");
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(false)
  const [filterData, setFilterData] = useState([]);
  const [filterModel, setFilterModel] = useState(false);
  const [sortModel, setSortModel] = useState(false);
  const [viewType,setViewType] = useState('list')

  const filter = useCallback((method, filterText) => {
    const data = tasksData.filter((task) => task[method].includes(filterText));
    setFilterData(data);
  },[tasksData]);
  const sortFn = (a, b) => {
    if (sortMethod !== "") {
      return a[sortMethod].localeCompare(b[sortMethod], "en", {
        sensitivity: "base",
      });
    }
    return 0;
  };
  const dropEvent = () => {
    setFilterData((prev) => {
      const updated = prev;
      updated[draggableEl.number].state = dropType;
      return updated;
    });
    try {
      axiosConfig
        .put(`/api/tasks/update/${draggableEl.id}`, {
          ...filterData[draggableEl.number],
          state: dropType,
        })
        .then((res) => {
          console.log(res.data);
          navigate("/tasks");
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect (()=>{
    try {
      axiosConfig
        .get(`api/tasks/`)
        .then((res) => {
          console.log(res.data);
          setTasks(res.data)
          setLoading(false)
          setError(false)
        });
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(true)
    }
  },[])
  useEffect(() => {
    setFilterData(tasksData);
  }, [tasksData, sortMethod]);
  if (loading) return <h1>Loading ....</h1>;
  if (error) return <h2>some thing wrong</h2>;

  return (
    <Suspense
      fallback={
        <div className="loading_auth">
          {" "}
          <span className="loader_auth"></span>{" "}
        </div>
      }
    >
      <div className="Task">
        <div className="task__navbar flex">
          <h3> welcome Back 🖐</h3>
          <div className="task__navbar__content">
            <span>{currentDate}</span>
          </div>
        </div>
        <div className="task__mainBox">
          <div className="task__mainBox__controls flex">
            <div className="view--controls primary--dark--text">
              <ul>
                <li className={`${viewType === 'board'?'active':''}`} onClick={()=>{
                  setViewType('board')
                }} style={{cursor:'pointer'}}>
                  {" "}
                  <Board width="25px" /> Board View
                </li>
                <li className={`${viewType === 'list'?'active':''}`} onClick={()=>{
                  setViewType('list')
                }}  style={{cursor:'pointer'}}>
                  {" "}
                  <Board width="25px" /> List View
                </li>
              </ul>
            </div>
            <div className="view--settings primary--dark--text">
              <ul>
                <li>
                  {filterModel && (
                    <FilterBox filter={filter} methods={["title", "tag"]} />
                  )}

                  <span
                    onClick={() => {
                      setSortModel(false);
                      setFilterModel(!filterModel);
                    }}
                  >
                    Filter
                  </span>
                </li>
                <li>
                  {sortModel && (
                    <SortBox
                      setSortMethod={setSortMethod}
                      methods={["title", "tag"]}
                    />
                  )}

                  <span
                    onClick={() => {
                      setFilterModel(false);
                      setSortModel(!sortModel);
                    }}
                  >
                    Sort
                  </span>
                </li>

                <li className="colored--btn">New Template</li>
              </ul>
            </div>
          </div>
          <div className={`task__mainBox__Board ${viewType}-view flex`}>
            <div className="boardBox  ">
              <div className="boardBox__header flex">
                <h4>
                  To do{" "}
                  <span>
                    (
                    {
                      filterData
                        .sort((a, b) => sortFn(a, b))
                        .filter((task) => task.state === "To do").length
                    }
                    )
                  </span>
                </h4>
                <div
                  className="flex"
                  onClick={() =>
                    navigate(`task/${tasksData.length + 1}`, {
                      state: { dataInfo: null, type: "New", state: "To do" },
                    })
                  }
                >
                  <Add width="25px" color={"#3a445e"} />{" "}
                  <span>اضف مهمة</span>
                </div>
              </div>
              <div className="boardBox__main">
              <div className={`${viewType}-view`} >
              <div className="boardBox__box flex">
                  {filterData?.map((task, index) => {
                    if (task.state === "To do") {
                      const {
                        id,
                        tag,
                        progress,
                        progressColor,
                        tagColor,
                        tasks,
                        ...info
                      } = task;

                      return (
                        <TaskCard
                          key={task._id}
                          progressColor={progressColor}
                          tagColor={tagColor}
                          tag={tag}
                          date={"30 Aug 2022"}
                          progress={progress}
                          tasks={tasks}
                          {...info}
                          taskId={task._id}
                          number={index + 1}
                          setDraggableEl={setDraggableEl}
                          dropEvent={dropEvent}
                          setDropType={setDropType}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
                <div
                  className="dragArea"
                  onDragOver={() => {
                    setDropType("To do");
                  }}
                >
                  اسحب المهمة الى هنا
                </div>
              </div>
                
              </div>
            </div>
            <div className="boardBox  ">
              <div className="boardBox__header flex">
                <h4>
                  In progresss{" "}
                  <span>
                    (
                    {
                      filterData
                        .sort((a, b) => sortFn(a, b))
                        .filter((task) => task.state === "in progress").length
                    }
                    )
                  </span>
                </h4>
                <div
                  className="flex"
                  onClick={() =>
                    navigate(`task/${tasksData.length + 1}`, {
                      state: {
                        dataInfo: null,
                        type: "New",
                        state: "in progress",
                      },
                    })
                  }
                >
                  <Add width="25px" color={"#3a445e"} />{" "}
                  <span>اضف مهمة</span>
                </div>
              </div>
              <div className="boardBox__main">
                <div className={`${viewType}-view`} >
                <div className="boardBox__box flex">
                  {filterData?.map((task, index) => {
                    if (task.state === "in progress") {
                      const {
                        tag,
                        progress,
                        progressColor,
                        tagColor,
                        tasks,
                        ...info
                      } = task;

                      return (
                        <TaskCard
                          key={task._id}
                          progressColor={progressColor}
                          tagColor={tagColor}
                          tag={tag}
                          date={"30 Aug 2022"}
                          progress={progress}
                          tasks={tasks}
                          {...info}
                          taskId={task._id}
                          number={index + 1}
                          setDraggableEl={setDraggableEl}
                          dropEvent={dropEvent}
                          setDropType={setDropType}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
                <div
                  className="dragArea"
                  onDragOver={() => {
                    setDropType("in progress");
                  }}
                >
                  اسحب المهمة الى هنا
                </div>
                </div>
                
              </div>
            </div>
            <div className="boardBox  ">
              <div className="boardBox__header flex">
                <h4>
                  Done{" "}
                  <span>
                    (
                    {
                      filterData
                        .sort((a, b) => sortFn(a, b))
                        .filter((task) => task.state === "done").length
                    }
                    )
                  </span>
                </h4>
                <div
                  className="flex"
                  onClick={() =>
                    navigate(`task/${tasksData.length + 1}`, {
                      state: { dataInfo: null, type: "New", state: "done" },
                    })
                  }
                >
                  <Add width="25px" color={"#3a445e"} />{" "}
                  <span>اضف مهمة</span>
                </div>
              </div>
              <div className="boardBox__main">
                <div className={`${viewType}-view`}>
                <div className="boardBox__box flex">
                  {filterData?.map((task, index) => {
                    if (task.state === "done") {
                      const {
                        tag,
                        progress,
                        progressColor,
                        tagColor,
                        tasks,
                        ...info
                      } = task;

                      return (
                        <TaskCard
                          key={task._id}
                          progressColor={progressColor}
                          tagColor={tagColor}
                          tag={tag}
                          date={"30 Aug 2022"}
                          progress={progress}
                          tasks={tasks}
                          {...info}
                          taskId={task._id}
                          number={index + 1}
                          setDraggableEl={setDraggableEl}
                          dropEvent={dropEvent}
                          setDropType={setDropType}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
                <div
                  className="dragArea"
                  onDragOver={() => {
                    setDropType("done");
                  }}
                >
                  اسحب المهمة الى هنا
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Tasks;

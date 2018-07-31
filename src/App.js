import React from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const people = require("./mock-data.json");

const App = () => {
  const onDragStart = () => {
    console.log("onDragStart", onDragStart);
  };
  const onDragUpdate = () => {
    /*...*/
  };
  const onDragEnd = () => {
    // the only one that is required
  };

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: 0,
    width: 250
  });

  const coaches = people.filter(person => person.status === "Coach");
  const students = people.filter(person => person.status === "Student");
  return (
    <div className="App">
      <DragDropContext
        onDragStart={onDragStart()}
        onDragUpdate={onDragUpdate()}
        onDragEnd={onDragEnd()}
      >
        <header className="App-header">
          <h1>Connector</h1>
        </header>
        <div>
          <p className="App-intro">coaches!</p>
          <span className="coaches-list">
            {/* {coaches.map(person => {
              return (
                <div key={person.id} className="a-coach">
                  <p>
                    {person.name}: {person.learn}
                  </p>
                </div>
              );
            })} */}
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {coaches.map(person => {
                    return (
                      <Draggable
                        key={person.id}
                        draggableId={person.id}
                        index={person.id}
                      >
                        <div className="a-coach">
                          {person.name}: {person.learn}
                        </div>
                      </Draggable>
                    );
                  })}
                </div>
              )}
            </Droppable>
          </span>
        </div>

        <div>
          <p className="App-intro">students!</p>
          <ul className="students-list">
            {students.map(person => {
              return (
                <li key={person.id} className="a-student">
                  <p>
                    {person.name}: {person.learn}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </DragDropContext>
    </div>
  );
};

export default App;

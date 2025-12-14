import { useState } from "react";
import { useDashboard } from "../context/DashboardContext";

const AddWidgetModal = ({ categoryId, close }) => {
  const { addWidget } = useDashboard();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!title || !text) return;
    addWidget(categoryId, {
      id: Date.now().toString(),
      title,
      text
    });
    close();
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h3>Add Widget</h3>
        <input
          placeholder="Widget Name"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Widget Text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={handleAdd}>Add</button>
          <button onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;

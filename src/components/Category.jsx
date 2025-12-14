import { useState } from "react";
import Widget from "./Widget";
import AddWidgetModal from "./AddWidgetModal";

const Category = ({ category }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="category">
      <div className="category-header">
        <h2>{category.name}</h2>
        <button onClick={() => setShowModal(true)}>+ Add Widget</button>
      </div>

      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            categoryId={category.id}
          />
        ))}
      </div>

      {showModal && (
        <AddWidgetModal
          categoryId={category.id}
          close={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Category;

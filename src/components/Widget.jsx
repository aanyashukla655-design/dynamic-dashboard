import { useDashboard } from "../context/DashboardContext";

const Widget = ({ widget, categoryId }) => {
  const { removeWidget, search } = useDashboard();

  if (
    search &&
    !widget.title.toLowerCase().includes(search.toLowerCase())
  ) {
    return null;
  }

  return (
    <div className="widget">
      <span
        className="remove"
        onClick={() => removeWidget(categoryId, widget.id)}
      >
        ✕
      </span>
      <h3>{widget.title}</h3>
      <p>{widget.text}</p>
    </div>
  );
};

export default Widget;

import { NavLink } from "react-router-dom";
import "./Form.css";

export type FormField = {
  name: "inputs" | "textareas" | "checkboxes";
  label: string;
  value: number;
};

type FormProps = {
  fields: FormField[];
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onFieldChange: (name: FormField["name"], value: number) => void;
};

function Form({
  fields,
  onHandleSubmit,
  onFieldChange,
}: FormProps): React.ReactElement {
  return (
    <form onSubmit={onHandleSubmit} className="build-form">
      <div className="build-inputs-container">
        {fields.map((field) => (
          <label key={field.name}>
            {field.label}:e
            <input
              min="0"
              type="number"
              value={field.value}
              onChange={(e) =>
                onFieldChange(field.name, Number(e.target.value))
              }
              placeholder={`${field.name} amount`}
              className={`${field.name}-amount`}
            />
          </label>
        ))}
      </div>
      <button type="submit" className="build-button">
        Build
      </button>
      <NavLink to="/" className="nav-button">
        <button>Return to Main Page</button>
      </NavLink>
    </form>
  );
}

export default Form;

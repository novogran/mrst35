import { JSX, useState } from "react";
import Form, { FormField } from "../../components/Form/Form";
import "./FormPage.css";

export default function FormPage(): React.ReactElement {
  const initialFields: FormField[] = [
    { name: "inputs", label: "Amount of inputs", value: 0 },
    { name: "textareas", label: "Amount of textareas", value: 0 },
    { name: "checkboxes", label: "Amount of checkboxes", value: 0 },
  ];

  const [fields, setFields] = useState(initialFields);
  const [formElements, setFormElements] = useState<JSX.Element[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    renderFormElements();
  };

  const handleFieldChange = (name: FormField["name"], value: number) => {
    setFields(
      fields.map((field: FormField) =>
        field.name === name ? { ...field, value } : field
      )
    );
  };

  const renderFormElements = () => {
    const elements: JSX.Element[] = [];

    fields.forEach((field) => {
      for (let i = 0; i < field.value; i++) {
        switch (field.name) {
          case "inputs":
            elements.push(
              <div key={`input-${i}`}>
                <label>
                  Input {i + 1}:
                  <input type="text" placeholder={`Input ${i + 1}`} />
                </label>
              </div>
            );
            break;

          case "textareas":
            elements.push(
              <div key={`textarea-${i}`}>
                <label>
                  Textarea {i + 1}:
                  <textarea placeholder={`Textarea ${i + 1}`} />
                </label>
              </div>
            );
            break;

          case "checkboxes":
            elements.push(
              <div key={`checkbox-${i}`}>
                <label>
                  <input type="checkbox" />
                  Checkbox {i + 1}
                </label>
              </div>
            );
            break;

          default:
            break;
        }
      }
    });

    setFormElements(elements);
  };

  return (
    <div className="form-conteiner">
      <Form
        fields={fields}
        onHandleSubmit={handleSubmit}
        onFieldChange={handleFieldChange}
      />
      {formElements.length > 0 && (
        <div className="rendered-form">
          <h2>Generated Form:</h2>
          <form>{formElements}</form>
        </div>
      )}
    </div>
  );
}

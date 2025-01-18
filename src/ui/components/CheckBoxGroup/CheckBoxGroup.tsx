import { isEmpty } from "../../../domain/utils";
import { Controller } from "../../../infrastrature/thirdparty";
import { CheckBoxGroupProps } from "./CheckBoxGroup.type";

const CheckBoxGroup = ({
  name,
  errors,
  control,
  options,
}: CheckBoxGroupProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className="form-check form-check-custom form-check-solid">
          {options.map((option) => (
            <>
              <input
                type="checkbox"
                className="form-check-input"
                onChange={(event) => {
                  console.log("CheckBox", value);
                  if (event.target.checked) {
                    const list = addToCollection(value, event.target.value);
                    onChange(list);
                  } else {
                    const list = removeFromCollection(
                      value,
                      event.target.value
                    );
                    onChange(list);
                  }
                }}
                value={option.value}
              />
              <label className="form-check-label" key={option.value}>
                {option.label}
              </label>
            </>
          ))}
          {!isEmpty(errors) ? (
            <span className="error text-danger">{errors}</span>
          ) : (
            ""
          )}
        </div>
      )}
    />
  );
};

export default CheckBoxGroup;

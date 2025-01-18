import { isEmpty } from "../../../domain/utils";
import { Controller } from "../../../infrastrature/thirdparty";
import { CheckBoxProps } from "./CheckBox.type";

const CheckBox = ({
  label,
  name,
  errors,
  className,
  control,
  required = false,
  disabled = false,
}: CheckBoxProps) => {
  return (
    <div className={`form-floating ${className}`}>
      <Controller
        render={({ field }) => (
          <div className={`form-check form-check-custom form-check-solid`}>
            <input
              className="form-check-input mr-3"
              type="checkbox"
              {...field}
              checked={field.value}
              disabled={disabled}
              id={`chck-${name}`}
            />
            <label className="ml-3" htmlFor={`chck-${name}`}>
              {label}
            </label>
          </div>
        )}
        control={control}
        rules={{ required: required }}
        name={name}
        defaultValue={false}
      />
      {!isEmpty(errors) ? (
        <span className="error text-danger">{errors}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default CheckBox;

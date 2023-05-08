import { ChangeEvent, FC, useState } from "react";
import { useFormContext } from "react-hook-form";

import data from "../../data/personalData";

const PersonalDetails: FC = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const autoFill = (e: ChangeEvent<HTMLInputElement>) => {
    data.forEach((item) => {
      setValue(item.name, e.target.checked ? item.value : "");
    });
  };

  return (
    <>
      <div className="formContainer mx-auto mt-5">
        <div className="head">
          <p>Personal Details</p>
        </div>
        <div className="body">
          {process.env.NODE_ENV == "development" && (
            <>
              <input
                id={"autoFill"}
                style={{ width: "fit-content" }}
                type={"checkbox"}
                onChange={autoFill}
              ></input>
              <label className="d-inline ms-2 " htmlFor="autoFill">
                Auto Fill
              </label>
            </>
          )}
          {Object.keys(errors).length > 0 && (
            <div className="errors">
              {Object.keys(errors).map((key) => (
                <div key={key}>
                  <small>{String(errors[key]?.message)}</small>
                </div>
              ))}
            </div>
          )}
          <div className="formGrid">
            {data.map((item) => (
              <div key={item.name}>
                <label>{item.label}</label>
                {item.type != "select" ? (
                  <input
                    type={item.type}
                    {...register(item.name, {
                      required: {
                        value: item.required,
                        message: `${item.label} Field is required`,
                      },
                      ...item?.validation,
                    })}
                    // value={autoFill ? item.value : undefined}
                    placeholder={item.placeholder}
                    className={`${errors[item.name] ? "err" : ""}`}
                  />
                ) : (
                  <>
                    <select
                      {...register(item.name, {
                        required: {
                          value: item.required,
                          message: `${item.label} Field is required`,
                        },
                      })}
                      name={item.name}
                      defaultValue={""}
                      // value={autoFill ? item.value : undefined}
                      // {...(autoFill ? { value: item.value } : { value: "" })}
                      className={`${errors[item.name] ? "err" : ""}`}
                    >
                      {item.options?.map((option, index) => (
                        <option
                          value={index == 0 ? "" : option}
                          disabled={index == 0}
                          key={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;

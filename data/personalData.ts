interface input {
  name: string;
  type: string;
  options?: string[];
  label: string;
  placeholder?: string;
  required: boolean;
  validation?: Object;
}
const data: input[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "example@domain.com",
    label: "Email",
    required: true,
  },
  {
    name: "gender",
    type: "select",
    options: ["Male", "Female"],
    label: "Gender",
    required: true,
  },
  {
    name: "phone",
    type: "number",
    placeholder: "01X XXXX XXXX",
    label: "Phone",
    required: true,
  },
  {
    name: "faculty",
    type: "select",
    options: [
      "Engineering and Applied Science",
      "Computer Science",
      "Buisness Adminstration",
      "Biotechnology",
    ],
    label: "School",
    required: true,
  },
  {
    name: "major",
    type: "text",
    placeholder: "ex: ECE",
    label: "Major",
    required: true,
  },
  {
    name: "Academic Year",
    type: "select",
    options: ["Freshman", "Sophomore", "Junior", "Senior", "Graduating Senior"],
    label: "Name",
    required: true,
  },
  {
    name: "nu id",
    type: "number",
    placeholder: "2XXXXXXXX",
    label: "NU ID",
    validation: {
      maxLength: {
        value: 9,
        message: "Please enter a valid NU ID",
      },
      minLength: {
        value: 9,
        message: "Please enter a valid NU ID",
      },
    },
    required: true,
  },
];

export default data;

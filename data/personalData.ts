interface input {
  name: string;
  type: string;
  options?: string[];
  label: string;
  placeholder?: string;
  required: boolean;
  validation?: Object;
  value?: string;
}
const data: input[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    required: true,
    value: "Omar Khaled",
  },
  {
    name: "email",
    type: "email",
    placeholder: "example@domain.com",
    label: "Email",
    required: true,
    value: "omrcorc@gmail.com",
  },
  {
    name: "gender",
    type: "select",
    options: ["Select Gender", "Male", "Female"],
    label: "Gender",
    required: true,
    value: "Male",
  },
  {
    name: "phone",
    type: "number",
    placeholder: "01X XXXX XXXX",
    label: "Phone",
    required: true,
    value: "01068405513",
  },
  {
    name: "faculty",
    type: "select",
    options: [
      "Select School",
      "Engineering and Applied Science",
      "Computer Science",
      "Buisness Adminstration",
      "Biotechnology",
    ],
    label: "School",
    required: true,
    value: "Engineering and Applied Science",
  },
  {
    name: "major",
    type: "text",
    placeholder: "ex: ECE",
    label: "Major",
    required: true,
    value: "ECE",
  },
  {
    name: "Academic Year",
    type: "select",
    options: [
      "Select Academic Year",
      "Freshman",
      "Sophomore",
      "Junior",
      "Senior",
      "Graduating Senior",
    ],
    label: "Academic Year",
    required: true,
    value: "Sophomore",
  },
  {
    name: "NU ID",
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
    value: "202000446",
  },
];

export interface FormDataInterface {
  name?: string;
  email?: string;
  gender?: string;
  phone?: string;
  faculty?:
    | "Engineering and Applied Science"
    | "Computer Science"
    | "Buisness Adminstration"
    | "Biotechnology";
  major?: string;
  "Academic Year"?: string;
  "NU ID"?: string;
  paymentOption?: "card" | "wallet";
}

export default data;
